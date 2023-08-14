import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid"
import { useTranslation } from "react-i18next";

export default function Landing() {
    const { t } = useTranslation();
    return (
        <div className='particles-container'>
            {
                [...Array(100)].map((e, i) =>
                    <div className="particles-circle-container" key={i}>
                        <div className="particles-circle">
                        </div>
                    </div>
                )
            }
            <div className="flex justify-center items-center w-full h-full text-center">
                <div>
                    <div className="text-6xl text-white mb-3">
                        {t('landing.title')}<span className="text-cyan-400">Arne Cools</span>
                    </div>
                    <div className="text-3xl text-white">
                        {t('landing.subtitle')}
                    </div>
                    <button className="contact-button mt-5">{t('landing.action')}</button>
                </div>
            </div>
            <div className="absolute bottom-2 w-full flex justify-center">
                <button  ><ChevronDoubleDownIcon className="h-12 w-12 text-white" /></button>
            </div>

        </div>
    )
}
