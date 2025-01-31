import { observer } from "mobx-react-lite";
import Button from '@/shared/ui/selectors/button/button';
import CloseSvg from '@/assets/images/svg/close-svg';
import FullStarSvg from '@/assets/images/svg/full-star';
import FormCalendar from './form';
import {useTranslation} from "@/i18n/client";
import {toHoursAndMinutes, pad2} from "@/shared/hepers/date";
import { setFormatDDMMYYYYtoMMDDYYYY } from "@/shared/hepers/date";
import useEscHooks from "@/shared/hooks/use-esc-event";
import IcloudImage from "@/shared/ui/icloud-image";
import FlagsComponents from "@/shared/ui/flags";
//svg
import ClockSvg from "@/assets/images/svg/clock-svg";

import {ServiceDate} from "@/shared/service/service-date"

import './style.css';

export default observer(function Step3({onChange, people, locale,  close, size, allPhoneNumbers, departure,isOpened ,langSelected}) {

    useEscHooks(close, isOpened);

    const { t } = useTranslation();


    if (!departure) {
        return null;
    }
    const serviceDate = new ServiceDate(setFormatDDMMYYYYtoMMDDYYYY(departure.date));
    const time = toHoursAndMinutes(departure.time);
    const duration = toHoursAndMinutes(departure.duration * 60);

    return (
        <div className={`step-3 ${size}`}>
            <div className="subtitle">
                <div className="subtitle-text">{t('modalBookingTitle')}</div>
                <div className="close-button" onClick={close} >
                    <CloseSvg/>
                </div>
            </div>
            <div className="title">
                <div className="title-intro">
                    <div className="subtitle-text subtitle-text-mobile">{t('modalBookingTitle')}</div>
                    <div className="title-text">{departure.tourTitle}</div>
                </div>
                <div className="guide">
                    <div className="photo-wrap">
                        {departure.avatar ? <IcloudImage src={departure.avatar} alt="brand logo" width={81} height={90}/> : null }
                    </div>
                    <div className="guide-info">
                        <div className="guide-name">{departure.subVendorName}</div>
                        <div className="guide-rate">
                            <div className="icon-wrap">
                                <FullStarSvg width={20} height={20}/>
                            </div>
                            <span>{departure.ranking}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-change">
                <div className="flex-box">
                    <div className="item-data">
                        <div className="choosen-date">{departure.dateLabel}</div>
                        <div className="time-current-modal">{t(serviceDate.day)} {serviceDate.dayNum} {t(serviceDate.month)} {pad2(time.hours)}:{pad2(time.minutes)}</div>
                        <span>,</span>
                    </div>
                    <div className="append-wrap2">
                        <div className="tour-item step-next">
                            <div className="tour-item__time">
                                <div className="duration">
                                    <div className="clock-wrap"><ClockSvg/></div>
                                    <span>{duration.hours}:{pad2(duration.minutes)} {t('Hours')}</span>
                                </div>
                                <div className="people">
                                    <span className="comma">,</span>
                                    <span className="people-count">{people}</span>{t('People')}
                                </div>
                                <FlagsComponents locale={langSelected} alt={`flag ${locale}`}  className='country-box-select'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center-wrap">
                    <Button className="change" onClick={onChange}>{t('Change')}</Button>
                </div>
            </div>
            <FormCalendar allPhoneNumbers={allPhoneNumbers} locale={locale}/>
        </div>
    )
})




