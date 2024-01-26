import {Suspense} from "react";
import BannerCity from "@/entities/city/ui/banner-city";
import SsrCalendar from "@/entities/calendar/ssr-calendar";
import MostPopularTours from "@/entities/city/ui/most-popular-tours";
import TextQuote from "@/widgets/text-quote";
import LatestReviews from "@/widgets/latest-reviews";
import Highlights from "@/widgets/highlights";
import TextBlocks from "@/widgets/text-blocks";
import Guides from "@/shared/ui/guides";
import MostPopularCity from "@/entities/city/ui/most-popular-city";
import Breadcrumbs from "@/shared/ui/breadcrumbs";
import {createTranslation} from "@/i18n/server";
import Footer from "@/shared/ui/layouts/footer/footer";
import dynamic from "next/dynamic";

const ChangeOfLanguage = dynamic(
    () => import("@/shared/ui/languages/change-of-language/change-of-language"),
    {ssr: false}
)

const MapAndSlider = dynamic(
    () => import("@/widgets/map-and-slider/map-and-slider"),
    {ssr: false}
)



export default async function CityPage({locale, title, id, languages, slug, isMobile}) {
    const {t} = await createTranslation(locale);
    return (
        <>
            <Suspense fallback="">
                <BannerCity
                    isMobile={isMobile}
                    size="city_banner"
                    locale={locale}
                    id={id}
                />
            </Suspense>
            <Suspense fallback="">
                <SsrCalendar locale={locale} type="city" id={id}/>
            </Suspense>
            <Suspense fallback="">
                <MostPopularTours id={id} locale={locale} slug={slug} />
                <TextQuote id={id} locale={locale}/>
                <MapAndSlider  locale={locale} id={id} buttonsShow={true}  />
                <LatestReviews id={id} locale={locale}/>
                <Highlights id={id}/>
                <TextBlocks id={id} locale={locale}/>
                <Guides id={id} locale={locale} title={title} type="city"/>
                <MostPopularCity locale={locale} id={id} slug={slug}/>
                <ChangeOfLanguage languages={languages} title={`${t('Free Tours')} ${title}`}/>
                <Breadcrumbs pages={[{slug: '/', title: t('Free Tour')}, {title: title}]} locale={locale}/>

                <Footer locale={locale}/>
            </Suspense>

        </>
    )
}
