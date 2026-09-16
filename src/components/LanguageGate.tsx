import type { Locale } from '../i18n'
import { t } from '../i18n'
import './LanguageGate.css'

type Props = {
  onSelect: (locale: Locale) => void
}

export function LanguageGate({ onSelect }: Props) {
  return (
    <div className="lang-gate">
      <div className="lang-gate__panel">
        <p className="lang-gate__brand">Guide Master</p>
        <p className="lang-gate__games">LZA · LA</p>
        <h1>{t('en', 'chooseLanguage')} / {t('pt', 'chooseLanguage')}</h1>
        <div className="lang-gate__actions">
          <button type="button" onClick={() => onSelect('pt')}>
            Português (BR)
          </button>
          <button type="button" onClick={() => onSelect('en')}>
            English
          </button>
        </div>
      </div>
    </div>
  )
}
