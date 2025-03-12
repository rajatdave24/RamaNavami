import {createBrowserRouter,} from "react-router-dom";
import {
    CampaignDetailsPage,
    CampaignsPage,
   BhagwatGeeta,
    DashboardPage,
    DetailError404Page,
    Error404Page,
    HomePage,
    HowItWorksPage,
    LoginPage,
    SignupPage,
    Alldonation,
   AnnaDan,
   DailyDetiSeva,
   CowServices,
   VidyaDaan,
   NityaUtsav
} from "../pages";


import {DashboardLayout, PublicLayout} from "../layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout compressedNav/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: '',
                index: true,
                element: <HomePage/>
            }
        ]
    },
    {
        path: "login",
        element: <LoginPage/>,
        errorElement: <Error404Page/>,
    },
    {
        path: "signup",
        element: <SignupPage/>,
        errorElement: <Error404Page/>,
    },
    {
        path: "how-it-works",
        element: <PublicLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: '',
                index: true,
                element: <HowItWorksPage/>
            }
        ]
    },
    {
        path: "campaigns",
        element: <PublicLayout/>,
        children: [
            {
                path: "",
                index: true,
                element: <CampaignsPage/>,
                errorElement: <Error404Page/>,
            },
            {
                path: ":id",
                element: <CampaignDetailsPage/>,
                errorElement: <DetailError404Page/>
            }
        ]
    },
    {
        path: "all-donation",
        
        element: <PublicLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: "",
                index: true,
                element: <Alldonation/>,
                errorElement: <Error404Page/>,
            }
        ]
    },
    {
        path: "all-donation/anna-daan-seva",
        
        element: <PublicLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: "",
                index: true,
                element: <AnnaDan/>,
                errorElement: <Error404Page/>,
            }
        ]
    },
    {
        path: "all-donation/cow-services",
        element: <PublicLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: "",
                index: true,
                element: <CowServices/>,
                errorElement: <Error404Page/>,
            }
        ]
    },
    {
        path: "all-donation/bhagwat-geeta-distribution",
        
        element: <PublicLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: "",
                index: true,
                element: <BhagwatGeeta/>,
                errorElement: <Error404Page/>,
            }
        ]
    },
    {
        path: "all-donation/daily-deti-seeva",
        
        element: <PublicLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: "",
                index: true,
                element: <DailyDetiSeva/>,
                errorElement: <Error404Page/>,
            }
        ]
    },
    {
        path: "all-donation/vidya-daan",
        
        element: <PublicLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: "",
                index: true,
                element: <VidyaDaan/>,
                errorElement: <Error404Page/>,
            }
        ]
    },
    
    {
        path: "all-donation/nitya-utsav-daan",
        
        element: <PublicLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: "",
                index: true,
                element: <NityaUtsav/>,
                errorElement: <Error404Page/>,
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout/>,
        errorElement: <Error404Page/>,
        children: [
            {
                path: '',
                index: true,
                element: <DashboardPage/>
            }
        ]
    },
    
]);


export default router;
