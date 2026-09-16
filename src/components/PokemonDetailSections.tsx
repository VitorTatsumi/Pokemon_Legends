import type { LearnMove } from '../data/lzaLearnsets'
import type { LaLearnMove } from '../data/laLearnsets'
import { formatMultiplier, TYPE_ABBR, typeMatchTable } from '../data/typeChart'
import { TYPE_COLORS } from '../data/pokemonUi'
import type { PokemonDetails, PokemonTypeName } from '../hooks/usePokemonDetails'
import type { Locale } from '../i18n'
import { t } from '../i18n'

export function PokemonFacts({ locale, details }: { locale: Locale; details: PokemonDetails }) {
  const total = details.stats.reduce((sum, s) => sum + s.value, 0)
  const matchups = typeMatchTable(details.types)

  return (
    <div className="poke-detail__body">
      {details.abilities.length > 0 && (
        <div className="poke-abilities">
          <h4>{t(locale, 'pokeAbilities')}</h4>
          <ul className="poke-abilities__list">
            {details.abilities.map((ability) => (
              <li key={`${ability.name}-${ability.hidden ? 'h' : 'n'}`}>
                <span>{ability.name}</span>
                {ability.hidden && (
                  <span className="poke-abilities__hidden">{t(locale, 'pokeHiddenAbility')}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="poke-stats">
        <div className="poke-stats__head">
          <h4>{t(locale, 'pokeStats')}</h4>
          <span>
            {t(locale, 'pokeStatTotal')}: {total}
          </span>
        </div>
        <ul className="poke-stats__list">
          {details.stats.map((stat) => (
            <li key={stat.key}>
              <span className="poke-stats__label">{t(locale, `stat_${stat.key}`)}</span>
              <span className="poke-stats__value">{stat.value}</span>
              <div className="poke-stats__bar" aria-hidden>
                <span
                  className={`poke-stats__fill poke-stats__fill--${stat.key}`}
                  style={{ width: `${Math.min(100, (stat.value / 180) * 100)}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="poke-typechart">
        <div className="poke-typechart__col">
          <h4>{t(locale, 'pokeTypeDefense')}</h4>
          <p className="poke-typechart__hint">{t(locale, 'pokeTypeDefenseHint')}</p>
          <TypeMatchGrid
            rows={matchups.map((row) => ({ type: row.type, value: row.defense }))}
          />
        </div>
        <div className="poke-typechart__col">
          <h4>{t(locale, 'pokeTypeOffense')}</h4>
          <p className="poke-typechart__hint">{t(locale, 'pokeTypeOffenseHint')}</p>
          <TypeMatchGrid
            rows={matchups.map((row) => ({ type: row.type, value: row.offense }))}
          />
        </div>
      </div>

      <PokemonLearnset locale={locale} learnset={details.learnset} />
    </div>
  )
}

function PokemonLearnset({
  locale,
  learnset,
}: {
  locale: Locale
  learnset: PokemonDetails['learnset']
}) {
  const hasMoves =
    learnset.level.length > 0 || learnset.tm.length > 0 || learnset.reminder.length > 0
  if (!hasMoves) return null

  return (
    <div className="poke-moves">
      <h4>{t(locale, 'pokeMoves')}</h4>
      <p className="poke-moves__hint">{t(locale, 'pokeMovesHint')}</p>

      {learnset.level.length > 0 && (
        <MoveGroup locale={locale} title={t(locale, 'pokeMovesLevel')} moves={learnset.level} />
      )}
      {learnset.tm.length > 0 && (
        <MoveGroup locale={locale} title={t(locale, 'pokeMovesTm')} moves={learnset.tm} />
      )}
      {learnset.reminder.length > 0 && (
        <MoveGroup
          locale={locale}
          title={t(locale, 'pokeMovesReminder')}
          moves={learnset.reminder}
        />
      )}
    </div>
  )
}

function MoveGroup({
  locale,
  title,
  moves,
}: {
  locale: Locale
  title: string
  moves: (LearnMove | LaLearnMove)[]
}) {
  return (
    <section className="poke-moves__group">
      <h5>{title}</h5>
      <ul className="poke-moves__list">
        {moves.map((move) => {
          const laMove = move as LaLearnMove
          return (
            <li key={`${move.kind}-${move.moveId}-${move.level ?? move.tm ?? ''}`}>
              <span className="poke-moves__tag">
                {move.kind === 'level' && move.level != null
                  ? `${t(locale, 'pokeMoveLevel')} ${move.level}${
                      laMove.masterLevel != null
                        ? ` → ${t(locale, 'pokeMovesMaster')} ${laMove.masterLevel}`
                        : ''
                    }`
                  : move.kind === 'tm' && move.tm
                    ? move.tm === 'Tutor'
                      ? t(locale, 'pokeMovesTutor')
                      : move.tm
                    : move.kind === 'tm'
                      ? 'TM'
                      : move.level != null
                        ? `${t(locale, 'pokeMoveEvo')} · ${t(locale, 'pokeMoveLevel')} ${move.level}`
                        : t(locale, 'pokeMoveEvo')}
              </span>
              <span className="poke-moves__name">
                {move.name}
                {laMove.hisuiExclusive ? (
                  <span className="poke-moves__hisui">{t(locale, 'pokeMovesHisui')}</span>
                ) : null}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function TypeMatchGrid({
  rows,
}: {
  rows: { type: PokemonTypeName; value: number }[]
}) {
  return (
    <div className="type-grid" role="list">
      {rows.map((row) => {
        const label = formatMultiplier(row.value)
        const tone =
          row.value === 0
            ? 'immune'
            : row.value >= 2
              ? 'weak'
              : row.value < 1
                ? 'resist'
                : 'neutral'
        return (
          <div key={row.type} className="type-grid__cell" role="listitem">
            <span
              className="type-grid__badge"
              style={{ background: TYPE_COLORS[row.type] }}
              title={row.type}
            >
              {TYPE_ABBR[row.type]}
            </span>
            <span
              className={`type-grid__mult type-grid__mult--${tone}`}
              aria-label={label || '1'}
            >
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
