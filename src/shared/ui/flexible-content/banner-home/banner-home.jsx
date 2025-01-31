import DropdownSearch from '@/entities/city/ui/dropdown-search-tour';
import Banner from '@/shared/ui/banner';
import LocationSvg from '@/assets/images/svg/location-svg';
import {fetchFlexibleContent} from "@/shared/api/flexible-content";
import './style.css';

export default async function BannerHome({locale, id, index, flexibleKey}) {
    const data = await fetchFlexibleContent(id, locale, flexibleKey, index, 60*5)

    if (!data) {
        return null
    }
    return (
        <Banner nameBanner="home_banner" title={data.title ?? ''} attachment={data?.image?.image}>
            <DropdownSearch locale={locale}/>
            <p className="link">

                {data.button ?
                    <>
                        <LocationSvg/>
                        <a target="_self" href={data.button.url}>{data.button.title}
                        </a>
                    </> :
                    null}
            </p>
        </Banner>

    )
}
