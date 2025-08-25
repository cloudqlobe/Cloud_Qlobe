import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Specialrate from "./customer/Components/Specialrate.jsx";
import Socialmediaicons from "./customer/Components/Socialmediaicons.jsx";
import CcRoutes from "./customer/Pages/Services/Ccroutes/Page.jsx";
import CliVoice from "./customer/Pages/Services/Clivoiceterminations/Page.jsx";
import DialerSolutions from "./customer/Pages/Services/Dialersolutions/Page.jsx";
import DidSolutions from "./customer/Pages/Services/Didsolutions/Page.jsx";
import ServerHosting from "./customer/Pages/Services/Serverhosting/Page.jsx";
import VoipWebsites from "./customer/Pages/Services/Voipwebsites/Page.jsx";
import Homepages from "./customer/Pages/Home/pages.jsx";
import Aboutpages from "./customer/Pages/About/pages.jsx";
import Contactpages from "./customer/Pages/contact/pages.jsx";
import Faqpages from "./customer/Pages/FAQ/pages.jsx";
import Ratepages from "./customer/Pages/Rates/pages.jsx";
import Dashboard from "./customer/Pages/CustomerDashboard/page.jsx";
import MemberDashboard from "./member/Dashboard/page.jsx";

import { AdminRoute, CustomerRoute, MemberRoute, SuperAdminRoute } from "./auth/ProtectedRoute.jsx";
// Member
import AdminMemberSignInPage from "./member/auth/AdminMemberLogin/page.jsx";
import MemberTokenVerification from "./member/auth/AdminMemberLogin/token.jsx";
//Lead
import InternalAssistance from "./member/Leads/InternalAssistance/page.jsx";
import LeadReport from "./member/Leads/Reports/page.jsx";
import NewLeads from "./member/Leads/NewLeads/page.jsx";
import LeadsMessage from "./member/Leads/messages/page.jsx";
import AddCustomerPage from "./member/Leads/NewLeads/AddLead/page.jsx";
import FollowUpDetails from "./member/Leads/Followups/[id]/page.jsx";
import LeadEmail from "./member/Leads/Emails/page.jsx";
import FollowUp from "./member/Leads/Followups/page.jsx";
//customer
import Signup from "./customer/Pages/auth/signup/page.jsx";
import LoginPage from "./customer/Pages/auth/login/page.jsx";
import VerifyTokenPage from "./customer/Pages/auth/Token/page.jsx";
import ResetPasswordPage from "./customer/Pages/auth/login/ResetPasswordPage.jsx";
import ForgotPasswordPage from "./customer/Pages/auth/login/ForgotPasswordPage.jsx";
//sale
import CustomersPage from "./member/Sales/Leads/page.jsx";
import SaleLeadDetails from "./member/Sales/Leads/[customerId]/page.jsx";
import AddSaleCustomerPage from "./member/Sales/Leads/AddLead/page.jsx";
import LeadDetails from "./member/Leads/NewLeads/[customerId]/page.jsx";
import CreateSaleTroubleTicket from "./member/Sales/Leads/[customerId]/components/CreateTicket/page.jsx";
import SaleCustomersPage from "./member/Sales/Customers/page.jsx";
import SaleEmail from "./member/Sales/Emails/page.jsx";
import SaleFollowUp from "./member/Sales/Followups/page.jsx";
import SaleCustomerLeadDetails from "./member/Sales/Customers/[customerId]/page.jsx";
import SalesReportPage from "./member/Sales/Reports/page.jsx";
import SaleInternalAssistance from "./member/Sales/internalAssistance/page.jsx";
import SaleMessage from "./member/Sales/Messages/page.jsx";
//carrier
import CarrierReport from "./member/Carriers/Reports/page.jsx";
import CarrierEmail from "./member/Carriers/Email/page.jsx";
import CarrierFollowUp from "./member/Carriers/Followups/page.jsx";
import AddCarrierCustomerPage from "./member/Carriers/Carriers/AddLead/page.jsx";
import CarrierCustomersPage from "./member/Carriers/Carriers/page.jsx";
import CarrierPage from "./member/Carriers/Leads/page.jsx";
import AddCarrierPage from "./member/Carriers/Leads/AddLead/page.jsx";
import CreateCarrierTroubleTicket from "./member/Carriers/Leads/[customerId]/components/CreateTicket/page.jsx";
import CarrierDetails from "./member/Carriers/Leads/[customerId]/page.jsx";
import CarrierInternalAssistance from "./member/Carriers/InternalAssistance/page.jsx";
import CarriersMessage from "./member/Carriers/Messages/page.jsx";
import CarriersCustomerLeadDetails from "./member/Carriers/Carriers/[customerId]/page.jsx";
//account
import RatesPage from "./member/Rates/CCRates/page.jsx";
import CLIRatesPage from "./member/Rates/CLIRates/page.jsx";
import TargetedRatePage from "./member/Rates/TargetedRates/page.jsx";
import OfferRatePage from "./member/Rates/OfferRate/page.jsx";
import SpecialRatePage from "./member/Rates/SpecialRates/page.jsx";
import PrivateRateRequestPage from "./member/Requests/PrivaterateRequest/page.jsx";
import OverdraftRequestPage from "./member/Requests/OverdraftRequests/page.jsx";
import VendorRequestPage from "./member/Requests/Vendorpayment/page.jsx";
import RechargerequestPage from "./member/Requests/RechargeRequests/page.jsx";
import RechargeForm from "./member/Accounts/Recharge/RechargeForm/page.jsx";
import VendorForm from "./member/Accounts/Recharge/VendorForm/page.jsx";
import AccountInternalAssistance from "./member/Accounts/InternalAssistance/page.jsx";
import AccountsEmail from "./member/Accounts/Emails/page.jsx";
import AccountFollowUp from "./member/Accounts/Followups/page.jsx";
import AddFollowUpInAccounts from "./member/Accounts/Followups/Addfollowup/page.jsx";
import AccountsMessagesDashboard from "./member/Accounts/Messages/page.jsx";
//support
import SupportEmail from "./member/Support/Emails/page.jsx";
import SupportInternalAssistance from "./member/Support/InternalAssistance/page.jsx";
import CreateTroubleTicket from "./member/Support/TroubleTickets/AddTroubleTicket/page.jsx";
import TroubleTicket from "./member/Support/TroubleTickets/page.jsx";
import TestingPage from "./member/Support/Testing/page.jsx";
import SupportFollowUp from "./member/Support/FollowUps/page.jsx";
import AddFollowUpInSupport from "./member/Support/FollowUps/Addfollowup/page.jsx";
import SupportMessagesDashboard from "./member/Support/Messages/page.jsx";
//superadmin
import SuperAdminDashboard from "./superAdmin/SuperAdminDashboard.jsx";
import SuperAdminLoginForm from "./superAdmin/auth/login/page.jsx";
import SuperAdminTokenVerification from "./superAdmin/auth/login/token.jsx";
import SuperAdminResetPasswordPage from "./superAdmin/auth/restpassword/RestPassword.jsx";
//admin
import AdminSigninPage from "./admin/auth/login/login.jsx";
import AdminTokenVerification from "./admin/auth/login/token.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/rates" element={<Ratepages />} />
        <Route path="/faq" element={<Faqpages />} />

        {/* Service Pages */}
        <Route path="/cc-routes" element={<CcRoutes />} />
        <Route path="/cli-voice" element={<CliVoice />} />
        <Route path="/dialer-solutions" element={<DialerSolutions />} />
        <Route path="/did-solutions" element={<DidSolutions />} />
        <Route path="/server-hosting" element={<ServerHosting />} />
        <Route path="/voip-websites" element={<VoipWebsites />} />

        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-token" element={<VerifyTokenPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route
          path="/dashboard"
          element={
            <CustomerRoute>
              <Dashboard />
            </CustomerRoute>
          }
        />


        {/* SuperAdmin Section */}
        <Route path="/superadmin/signin" element={<SuperAdminLoginForm />} />
        <Route path="/superadmin/verify-token" element={<SuperAdminTokenVerification />} />
        <Route path="/superadmin/reset-password" element={<SuperAdminResetPasswordPage />} />

        <Route
          path="/superadmin/*"
          element={
            <SuperAdminRoute>
              <Routes>
                <Route path="/dashboard" element={<SuperAdminDashboard />} />
              </Routes>
            </SuperAdminRoute>
          }
        />

        <Route path="/admin/signin" element={<AdminSigninPage />} />
        <Route path="/admin/verify-token" element={<AdminTokenVerification />} />

        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
              </Routes>
            </AdminRoute>
          }
        />

        {/* Member Section */}
        <Route path="/member/signin" element={<AdminMemberSignInPage />} />
        <Route path="/member/verify-token" element={<MemberTokenVerification />} />

        {/* Customer Routes */}
        <Route path="/member/*" element={
          <MemberRoute>
            <Routes>
              <Route path="/dashboard" element={< MemberDashboard />} />
              {/* Leads */}
              <Route path="/newLeads" element={<NewLeads />} />
              <Route path="/NewLeads/:customerId" element={<LeadDetails />} />
              <Route path="/Addlead" element={<AddCustomerPage />} />
              <Route path="/leads/assistance" element={<InternalAssistance />} />
              <Route path="/leads/messages" element={<LeadsMessage />} />
              <Route path="/notification" element={<FollowUp />} />
              <Route path="/detailfollowup/:followupId" element={<FollowUpDetails />} />
              <Route path="/leads/email" element={<LeadEmail />} />
              <Route path="/leads/report" element={<LeadReport />} />

              {/* Sale */}
              <Route path="/sale/leads" element={<CustomersPage />} />
              <Route path="/sale/addlead" element={<AddSaleCustomerPage />} />
              <Route path="/SaleLead/:customerId" element={<SaleLeadDetails />} />
              <Route path="/sale/ticket" element={<CreateSaleTroubleTicket />} />
              <Route path="/sale/customer" element={<SaleCustomersPage />} />
              <Route path="/sale/customer/addlead" element={<AddSaleCustomerPage />} />
              <Route path="/SaleLead/customer/:customerId" element={<SaleCustomerLeadDetails />} />
              <Route path="/sale/followups" element={<SaleFollowUp />} />
              <Route path="/sale/email" element={<SaleEmail />} />
              <Route path="/sale/report" element={<SalesReportPage />} />
              <Route path="/sale/messages" element={<SaleMessage />} />
              <Route path="/sale/assistance" element={<SaleInternalAssistance />} />

              {/* Carrier */}
              <Route path="/carrier/leads" element={<CarrierPage />} />
              <Route path="/carrier/addlead" element={<AddCarrierPage />} />
              <Route path="/carrier/lead-details/:customerId" element={<CarrierDetails />} />
              <Route path="/carrrier/ticket" element={<CreateCarrierTroubleTicket />} />
              <Route path="/carrier/carrier" element={<CarrierCustomersPage />} />
              <Route path="/carrier/customer/addlead" element={<AddCarrierCustomerPage />} />
              <Route path="/carrier/followup" element={<CarrierFollowUp />} />
              <Route path="/carrier/messages" element={<CarriersMessage />} />
              <Route path="/carrier/assistance" element={<CarrierInternalAssistance />} />
              <Route path="/carrier/carrier/:customerId" element={<CarriersCustomerLeadDetails />} />
              <Route path="/carrier/email" element={<CarrierEmail />} />
              <Route path="/carrier/report" element={<CarrierReport />} />

              {/* Accounts */}
              <Route path="/clirates" element={<CLIRatesPage />} />
              <Route path="/ccrates" element={<RatesPage />} />
              <Route path="/targetedrates" element={<TargetedRatePage />} />
              <Route path="/offer/rates" element={<OfferRatePage />} />
              <Route path="/specialrates" element={<SpecialRatePage />} />
              <Route path="/recharge" element={<RechargeForm />} />
              <Route path="/vendor_form" element={<VendorForm />} />
              <Route path="/recharge_requests" element={<RechargerequestPage />} />
              <Route path="/vendorpayment" element={<VendorRequestPage />} />
              <Route path="/overdraft_requests" element={<OverdraftRequestPage />} />
              <Route path="/privaterate_requests" element={<PrivateRateRequestPage />} />
              <Route path="/account/followup" element={<AccountFollowUp />} />
              <Route path="/account/addFollowup" element={<AddFollowUpInAccounts />} />
              <Route path="/account/messages" element={<AccountsMessagesDashboard />} />
              <Route path="/account/assistance" element={<AccountInternalAssistance />} />
              <Route path="/account/email" element={<AccountsEmail />} />
              {/* <Route path="/account/report" element={<AccountsReport />} /> */}
              {/* <Route path="/account/myticket" element={<AccountsMyTicket />} /> */}

              {/* support */}
              <Route path="/support/troubleTickets" element={<TroubleTicket />} />
              <Route path="/support/createTickets" element={<CreateTroubleTicket />} />
              <Route path="/support/testing" element={<TestingPage />} />
              <Route path="/support/email" element={<SupportEmail />} />
              <Route path="/support/internalassistence" element={<SupportInternalAssistance />} />
              <Route path="/support/followups" element={<SupportFollowUp />} />
              <Route path="/support/addFollowup" element={<AddFollowUpInSupport />} />
              <Route path="/support/messages" element={<SupportMessagesDashboard />} />
              {/* <Route path="/support/myTickets" element={<MyTickets />} /> */}
              {/* <Route path="/support/task" element={<Admintask />} /> */}

              {/* Communications */}
              {/* <Route path="/communication/enquiry" element={<EnquiryPage />} />
              <Route path="/communication/didEnquiry" element={<Didnumberenquiery />} />
              <Route path="/communication/myTickets" element={<RequestsPage />} />
              <Route path="/communication/chatpanel" element={<ChatPanel />} />
              <Route path="/communication/email" element={<CommunicationEmail />} />
              <Route path="/communication/messages" element={<CommunicationMessagesDashboard />} />
              <Route path="/communication/assistance" element={<CommunicationInternalAssistance />} /> */}

              {/* Settings */}
              {/* <Route path="/settings_page" element={<SettingsPage />} />
              <Route path="/customermanagement" element={<CustomersPage />} />
              <Route path="/staffmanagement" element={<StaffPageUnderDevelopment />} />
              <Route path="/allstaffmanagement" element={<AllStaffManagment />} />
              <Route path="/manager-transfers" element={<ManagerTransfersPage />} /> */}
            </Routes>
          </MemberRoute>
        } />

      </Routes>

      <Specialrate />
      <Socialmediaicons />
    </Router >
  );
}

export default App;
