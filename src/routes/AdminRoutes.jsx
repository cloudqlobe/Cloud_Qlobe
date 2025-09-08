import { Routes, Route } from "react-router-dom";
import { AdminRoute } from "../auth/ProtectedRoute.jsx";

import AdminSigninPage from "../admin/auth/login/login.jsx";
import AdminTokenVerification from "../admin/auth/login/token.jsx";
import AdminDashboard from "../admin/AdminDashboard.jsx";
import StaffManagement from "../admin/settings/ManageStaff/page.jsx";
import CustomersManagementPage from "../admin/settings/Customer/page.jsx";
//admin account
import AdminCCRate from "../admin/account/Rates/CCRates/page.jsx";
import AdminCLIRate from "../admin/account/Rates/CLIRates/page.jsx";
import AdminSpecialRatePage from "../admin/account/Rates/SpecialRates/page.jsx";
import AdminOfferRatePage from "../admin/account/Rates/OfferRate/page.jsx";
import AdminTargetedRatePage from "../admin/account/Rates/TargetedRates/page.jsx";
import AdminVendorForm from "../admin/account/Recharge/VendorForm/page.jsx";
import AdminRechargeForm from "../admin/account/Recharge/RechargeForm/page.jsx";
import AdminRechargerequestPage from "../admin/account/Requests/RechargeRequests/page.jsx";
import AdminVendorRequestPage from "../admin/account/Requests/Vendorpayment/page.jsx";
import AdminPrivateRateRequestPage from "../admin/account/Requests/PrivaterateRequest/page.jsx";
import AdminOverdraftRequestPage from "../admin/account/Requests/OverdraftRequests/page.jsx";
//admin lead
import AdminLeadInternalAssistance from "../admin/Leads/InternalAssistance/page.jsx";
import AdminLeadsMessage from "../admin/Leads/messages/page.jsx";
import AdminLeadReport from "../admin/Leads/Reports/page.jsx";
import AdminLeadEmail from "../admin/Leads/Emails/page.jsx";
import AdminLeadFollowUp from "../admin/Leads/Followups/page.jsx";
import AdminNewLeads from "../admin/Leads/NewLeads/page.jsx";
import AdminAddNewLead from "../admin/Leads/NewLeads/AddLead/page.jsx";
import AdminLeadDetails from "../admin/Leads/NewLeads/[customerId]/page.jsx";
//sale
import AdminSalesReportPage from "../admin/Sales/Reports/page.jsx";
import AdminSaleMessage from "../admin/Sales/Messages/page.jsx";
import AdminSaleInternalAssistance from "../admin/Sales/internalAssistance/page.jsx";
import AdminSaleEmail from "../admin/Sales/Emails/page.jsx";
import AdminFollowUpDetails from "../admin/Sales/Followups/[id]/page.jsx";
import AdminSaleFollowUp from "../admin/Sales/Followups/page.jsx";
import AdminAddSaleCustomerPage from "../admin/Sales/Leads/AddLead/page.jsx";
import AdminCustomersPage from "../admin/Sales/Leads/page.jsx";
import AdminCreateSaleTroubleTicket from "../admin/Sales/Leads/[customerId]/components/CreateTicket/page.jsx";
import AdminSaleLeadDetails from "../admin/Sales/Leads/[customerId]/page.jsx";
import AdminSaleCustomersPage from "../admin/Sales/Customers/page.jsx";
import AdminAddCustomerPage from "../admin/Sales/Customers/AddLead/page.jsx";
import AdminSaleCustomerLeadDetails from "../admin/Sales/Customers/[customerId]/page.jsx";
//carriers
import AdminCarrierReport from "../admin/Carriers/Reports/page.jsx";
import AdminCarrierEmail from "../admin/Carriers/Email/page.jsx";
import AdminCarrierInternalAssistance from "../admin/Carriers/InternalAssistance/page.jsx";
import AdminCarriersMessage from "../admin/Carriers/Messages/page.jsx";
import AdminCarrierFollowUp from "../admin/Carriers/Followups/page.jsx";
import AdminAddCarrierPage from "../admin/Carriers/Leads/AddLead/page.jsx";
import AdminCarrierPage from "../admin/Carriers/Leads/page.jsx";
import AdminCarrierDetails from "../admin/Carriers/Leads/[customerId]/page.jsx";
import AdminCreateCarrierTroubleTicket from "../admin/Carriers/Leads/[customerId]/components/CreateTicket/page.jsx";
import AdminAddCarrierCustomerPage from "../admin/Carriers/Carriers/AddLead/page.jsx";
import AdminCarrierCustomersPage from "../admin/Carriers/Carriers/page.jsx";
import AdminCarriersCustomerLeadDetails from "../admin/Carriers/Carriers/[customerId]/page.jsx";
//support
import SupportEmail from "../admin/Support/Emails/page.jsx";
import SupportInternalAssistance from "../admin/Support/InternalAssistance/page.jsx";
import SupportMessagesDashboard from "../admin/Support/Messages/page.jsx";
import TroubleTicket from "../admin/Support/TroubleTickets/page.jsx";
import CreateTroubleTicket from "../admin/Support/TroubleTickets/AddTroubleTicket/page.jsx";
import SupportFollowUp from "../admin/Support/FollowUps/page.jsx";
import AddFollowUpInSupport from "../admin/Support/FollowUps/Addfollowup/page.jsx";
import TestingPage from "../admin/Support/Testing/page.jsx";
import TaskPage from "../admin/Support/Tasks/page.jsx";
import AccountFollowUp from "../admin/account/Followups/page.jsx";
import AddFollowUpInAccounts from "../admin/account/Followups/Addfollowup/page.jsx";



const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<AdminSigninPage />} />
            <Route path="/verify-token" element={<AdminTokenVerification />} />

            <Route path="/*" element={
                <AdminRoute>
                    <Routes>
                        <Route path="/dashboard" element={<AdminDashboard />} />
                        <Route path="/staff-management" element={<StaffManagement />} />
                        <Route path="/customer-management" element={<CustomersManagementPage />} />
                        {/* account */}
                        <Route path="/cc/rates" element={<AdminCCRate />} />
                        <Route path="/cli/rates" element={<AdminCLIRate />} />
                        <Route path="/special/rates" element={<AdminSpecialRatePage />} />
                        <Route path="/offer/rates" element={<AdminOfferRatePage />} />
                        <Route path="/targeted/rates" element={<AdminTargetedRatePage />} />
                        <Route path="/recharge/form" element={<AdminRechargeForm />} />
                        <Route path="/vendor/form" element={<AdminVendorForm />} />
                        <Route path="/recharge/requests" element={<AdminRechargerequestPage />} />
                        <Route path="/vendor/requests" element={<AdminVendorRequestPage />} />
                        <Route path="/overdraft_requests" element={<AdminOverdraftRequestPage />} />
                        <Route path="/privaterate_requests" element={<AdminPrivateRateRequestPage />} />
                        <Route path="/account/followup" element={<AccountFollowUp />} />
                        <Route path="/account/addFollowup" element={<AddFollowUpInAccounts />} />
                        {/* <Route path="/account/myticket" element={<AccountsMyTicket />} /> */}

                        {/* lead */}
                        <Route path="/newLeads" element={<AdminNewLeads />} />
                        <Route path="/Addlead" element={<AdminAddNewLead />} />
                        <Route path="/NewLeads/:customerId" element={<AdminLeadDetails />} />
                        <Route path="/notification" element={<AdminLeadFollowUp />} />
                        <Route path="/leads/email" element={<AdminLeadEmail />} />
                        <Route path="/leads/assistance" element={<AdminLeadInternalAssistance />} />
                        <Route path="/leads/messages" element={<AdminLeadsMessage />} />
                        <Route path="/leads/report" element={<AdminLeadReport />} />

                        {/* sale */}
                        <Route path="/sale/leads" element={<AdminCustomersPage />} />
                        <Route path="/sale/addlead" element={<AdminAddSaleCustomerPage />} />
                        <Route path="/SaleLead/:customerId" element={<AdminSaleLeadDetails />} />
                        <Route path="/sale/ticket" element={<AdminCreateSaleTroubleTicket />} />
                        <Route path="/sale/customer" element={<AdminSaleCustomersPage />} />
                        <Route path="/sale/customer/addlead" element={<AdminAddCustomerPage />} />
                        <Route path="/SaleLead/customer/:customerId" element={<AdminSaleCustomerLeadDetails />} />
                        <Route path="/sale/followups" element={<AdminSaleFollowUp />} />
                        <Route path="/detailfollowup/:followupId" element={<AdminFollowUpDetails />} />
                        <Route path="/sale/email" element={<AdminSaleEmail />} />
                        <Route path="/sale/assistance" element={<AdminSaleInternalAssistance />} />
                        <Route path="/sale/messages" element={<AdminSaleMessage />} />
                        <Route path="/sale/report" element={<AdminSalesReportPage />} />
                        {/* Carrier */}
                        <Route path="/carrier/leads" element={<AdminCarrierPage />} />
                        <Route path="/carrier/addlead" element={<AdminAddCarrierPage />} />
                        <Route path="/carrier/lead-details/:customerId" element={<AdminCarrierDetails />} />
                        <Route path="/carrrier/ticket" element={<AdminCreateCarrierTroubleTicket />} />
                        <Route path="/carrier/carrier" element={<AdminCarrierCustomersPage />} />
                        <Route path="/carrier/customer/addlead" element={<AdminAddCarrierCustomerPage />} />
                        <Route path="/carrier/carrier/:customerId" element={<AdminCarriersCustomerLeadDetails />} />
                        <Route path="/carrier/followup" element={<AdminCarrierFollowUp />} />
                        <Route path="/carrier/messages" element={<AdminCarriersMessage />} />
                        <Route path="/carrier/assistance" element={<AdminCarrierInternalAssistance />} />
                        <Route path="/carrier/email" element={<AdminCarrierEmail />} />
                        <Route path="/carrier/report" element={<AdminCarrierReport />} />
                        {/* support */}
                        <Route path="/support/troubleTickets" element={<TroubleTicket />} />
                        <Route path="/support/createTickets" element={<CreateTroubleTicket />} />
                        <Route path="/support/testing" element={<TestingPage />} />
                        <Route path="/support/email" element={<SupportEmail />} />
                        <Route path="/support/internalassistence" element={<SupportInternalAssistance />} />
                        <Route path="/support/followups" element={<SupportFollowUp />} />
                        <Route path="/support/addFollowup" element={<AddFollowUpInSupport />} />
                        <Route path="/support/messages" element={<SupportMessagesDashboard />} />
                        <Route path="/support/task" element={<TaskPage />} />
                        {/* <Route path="/support/myTickets" element={<MyTickets />} /> */}

                        {/* Communications */}
                        {/* <Route path="/communication/enquiry" element={<EnquiryPage />} />
              <Route path="/communication/didEnquiry" element={<Didnumberenquiery />} />
              <Route path="/communication/myTickets" element={<RequestsPage />} />
              <Route path="/communication/chatpanel" element={<ChatPanel />} />
              <Route path="/communication/email" element={<CommunicationEmail />} />
              <Route path="/communication/messages" element={<CommunicationMessagesDashboard />} />
              <Route path="/communication/assistance" element={<CommunicationInternalAssistance />} /> */}


                    </Routes>
                </AdminRoute>
            }
            />
        </Routes>
    );
};

export default AdminRoutes;