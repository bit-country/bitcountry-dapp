import React from "react";
import { Router } from "@reach/router";
import DAppWrapper from "./components/HOC/DApp/DAppWrapper";
import AuthWrapper from "./components/HOC/Auth/AuthWrapper";
import CountryWrapper from "./components/HOC/Country/CountryWrapper";
import BlockWrapper from "./components/HOC/Block/BlockWrapper";
import HomePage from "./pages/Home/HomePage";
import CreateCountry from "./pages/CreateCountry/CreateCountry";
import Register from "./pages/Registration/Register";
import Login from "./pages/Login/Login";
import MyCountries from "./pages/MyCountries/MyCountries";
import { ToastContainer } from "react-toastify";
import Country from "./pages/Country/Country";
import Explore from "./pages/Explore/ExploreCountry";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import BlockContainer from "./pages/Blocks/BlockContainer";
import WalletContainer from "./pages/Wallet/WalletContainer";
import AssetContainer from "./pages/Asset/AssetContainer";
import CountryActivityRules from "./pages/Country/CountryActivityRules";
import WelcomePage from "./pages/ReferralWelcome/WelcomePage";
import Moderation from "./pages/Moderation/ModerationContainer";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import FAQ from "./pages/FAQ/FAQ";
import PendingCountry from "./pages/PendingCountry/PendingCountry";
import Profile from "./pages/Profile/Profile";
import MyPosts from "./pages/MyPosts/MyPosts";
import Mind from "./pages/Mind/Mind";
import PostDetail from "./pages/PostDetail/PostDetail";
import NotFound from "./pages/Errors/NotFound";
import Marketplace from "./pages/Marketplace/Marketplace";
import MarketplaceBrowsing from "./pages/Marketplace/Browse";
import MarketplaceSelling from "./pages/Marketplace/SellItem";
import MarketplaceYourItem from "./pages/Marketplace/YourItem";
import MarketplaceItemDetails from "./pages/Marketplace/ItemDetails";
import Forbidden from "./pages/Errors/Forbidden";
import InternalError from "./pages/Errors/InternalError";
import Unauthorised from "./pages/Errors/Unauthorised";
import GoverningContainer from "./pages/Governing/GoverningContainer";
import { appInsights } from "./utils/Logging";
import { FormattedMessage } from "react-intl";
import Notifications from "./pages/Notifications/Notifications";
import { SubstrateProvider } from "./components/HOC/DApp/SubstrateWrapper";
import { MyAccountProvider } from "./components/HOC/DApp/SubstrateAccountProvider";
import BitWorldViewer from "./components/BitWorldViewer";

//Add fontAwesome icon to use across the site
// example of usage in /pages/Marketplace/Marketplace.js
//for reference, please look at this https://github.com/FortAwesome/react-fontawesome
library.add(faSearch, faSlidersH);

appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview

function App() {
  return (
    <SubstrateProvider>
      <MyAccountProvider>
        <AuthWrapper>
          <Router>
            <HomePage path="/" exact />
            <DAppWrapper path="/">
              <Login path="/login" />
              <Register path="/register" />
              <Profile path="/profile" />
              <CreateCountry path="/create-country" />
              <MyCountries path="/my-countries" />
              <Explore path="/explore" />
              <WelcomePage path="/c/:id/welcome/:userId" />
              <WalletContainer path="/wallet/*" />
              <AssetContainer path="/asset/*" />
              <CountryActivityRules path="/country-rules/edit" />
              <FAQ path="/faq" />
              <MyPosts path="/my-posts" />
              <PostDetail path="/my-posts/:shortCode" />
              <PostDetail path="/my-posts/:shortCode/:slug" />
              <Mind path="/my-mind" personal />
              <Notifications path="/notifications" />
              <PostDetail path="/my-mind/:shortCode" personal />
              <PostDetail path="/my-mind/:shortCode/:slug" personal />
              <Mind path="/m/:blogUid/" />
              <PostDetail path="/m/:blogUid/:shortCode" />
              <PostDetail path="/m/:blogUid/:shortCode/:slug" />
              <Marketplace path="/marketplace" />
              <MarketplaceBrowsing path="/marketplace/browse" />
              <MarketplaceSelling path="/marketplace/sell" />
              <MarketplaceYourItem path="/marketplace/youritem" />
              <MarketplaceItemDetails path="/marketplace/item/:itemId" />
              <CountryWrapper path="/c/:id">
                <Country path="/" />
                <Moderation path="/moderation" />
                <PendingCountry path="/pending" />
                <BlockWrapper path="/b/:id">
                  <BlockContainer path="/">
                    <NewsFeed path="/" />
                    <PostDetail path="/:shortCode" />
                    <PostDetail path="/:shortCode/:slug" />
                  </BlockContainer>
                  <BitWorldViewer path="/viewer" />
                  <NotFound
                    default
                    message={
                      <FormattedMessage id="errors.pages.404.message.block" />
                    }
                  />
                </BlockWrapper>
                <GoverningContainer path="/governing/*" />
                <Unauthorised path="401" />
                <Forbidden path="/403" />
                <NotFound
                  path="/404"
                  default
                  message={
                    <FormattedMessage id="errors.pages.404.message.country" />
                  }
                />
              </CountryWrapper>
              <Unauthorised path="401" />
              <Forbidden path="/403" />
              <NotFound
                path="/404"
                default
                message={<FormattedMessage id="errors.pages.404.message.page" />}
              />
              <NotFound
                path="/404/c"
                message={
                  <FormattedMessage id="errors.pages.404.message.country" />
                }
              />
              <NotFound
                path="/404/b"
                message={<FormattedMessage id="errors.pages.404.message.block" />}
              />
              <NotFound
                path="/404/p"
                message={<FormattedMessage id="errors.pages.404.message.post" />}
              />
              <NotFound
                path="/404/m"
                message={<FormattedMessage id="errors.pages.404.message.mind" />}
              />
              <InternalError path="/500" />
            </DAppWrapper>
          </Router>
          <ToastContainer
            className="success-notification-background"
            toastClassName="custom-success-toast"
          />
        </AuthWrapper>
      </MyAccountProvider >
    </SubstrateProvider >
  );
}

export default App;
