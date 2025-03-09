import HeroSection from "../sections/Home/Hero.tsx";
import {Box, BoxProps, Container, Text, TextProps, Title, TitleProps} from "@mantine/core";
import {TitleBadge} from "../components";
import FeaturesSection from "../sections/Home/Features.tsx";
import StatsSection from "../sections/Home/Stats";
import JoinUsSection from "../sections/Home/JoinUs";
import WaysToFundSection from "../sections/Home/WaysToFund";
import CampaignsSection from "../sections/Home/Campaigns";
import GetStartedSection from "../sections/Home/GetStarted";
import TestimonialsSection from "../sections/Home/Testimonials";
import {Helmet} from "react-helmet";
import TempleSchedule from "../components/templescedule/TempleSchedule.tsx";
import StatsCountertsx from "../components/Counter/StatsCountertsx.tsx";
import ChooseACause from "../components/Chooseacause/ChooseACause.tsx";
import FoodSection from "../components/FoodSection/FoodSection.tsx";
import DonationSection from "../components/Donation/DonationSection.tsx";
import ProcessSection from "../components/Nourishment/ProcessSection.tsx";
import VideoSection from "../components/VideoSection/VideoSection.tsx";
import Gallery from "../components/Gallery/Gallery.tsx";
import Footer from "../components/lastfooter/Footer.tsx";
import VideoSectionandImage from "../components/VideoandImagesection/VideoSectionandImage.tsx"
import TestimonialSection from "../components/TestimonialSection/TestimonialSection.tsx";
import NewsAndStories from "../components/newsleetersection/NewsAndStories.tsx";
import BackgroundSwitcher from "../components/BackgroundSlider/BackgroundSwitcher.tsx";
import KumbhMela from "../components/KumbhMela/KumbhMela.tsx"
import Benifits from "../components/Benifits/Benifts.tsx";

const HomePage = (): JSX.Element => {
    const boxProps: BoxProps = {
        mt: 96,
        mb: 136,
        py: 48
    }

    const titleProps: TitleProps = {
        size: 32,
        weight: 800,
        mb: "lg",
        transform: 'capitalize',
        sx: {lineHeight: '40px'}
    }

    const subTitleProps: TextProps = {
        size: 20,
        weight: 700,
        mb: "md",
        sx: {lineHeight: '28px'}
    }

    return (
        <>
            <Helmet>
                <title>ISKCON Juhu</title>
            </Helmet>
            <Box>
                {/* <HeroSection/>
                <TempleSchedule/>
                <StatsCountertsx/>
                <ChooseACause/>
                <FoodSection/> */}
                <BackgroundSwitcher/>
                <DonationSection/>
                <KumbhMela/>
               {/* X/ <ProcessSection/> */}
                <Benifits/>
                <VideoSection/>
                <Gallery/>
                {/* <VideoSectionandImage/> */}
                {/* <TestimonialSection/>
                <NewsAndStories/> */}
                <Footer/>
            </Box>
        </>
    );
};

export default HomePage;
