import {
  FaChartLine, FaUsers, FaBell, FaEnvelope, FaFileAlt, FaComments, FaHandsHelping,
  FaTruck, FaShippingFast, FaMoneyBillWave, FaCreditCard, FaStar, FaBullseye, FaPercentage,
  FaWallet, FaFileInvoiceDollar, FaTools, FaTicketAlt, FaFlask, FaTasks, FaHeadset,
  FaPhoneAlt, FaHashtag, FaUserCog, FaUsersCog, FaExchangeAlt
} from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";
import { HomeIcon } from "@heroicons/react/24/solid";

// Colors
const iconColors = {
  primary: "#3B82F6", secondary: "#10B981", accent: "#F59E0B", danger: "#EF4444",
  purple: "#8B5CF6", indigo: "#6366F1", pink: "#EC4899", teal: "#14B8A6",
  cyan: "#06B6D4", dark: "#1F2937", light: "#6B7280"
};
const iconStyle = (colorKey = "primary") => ({
  color: iconColors[colorKey] || iconColors.primary,
  fontSize: "25px", marginLeft: "12px", marginTop: "12px"
});
const boxStyle = { border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px" };
const makeLabel = (Icon, color, text) => (
  <div className="flex items-center">
    <div style={boxStyle}><Icon style={iconStyle(color)} /></div>
    <span>{text}</span>
  </div>
);

export const getNavItems = (adminRole) => [

  { id: "dashboard", icon: <HomeIcon className="h-8 w-8 text-orange-400" />, href: "/admin/dashboard", roles: ["all"], mobileOnly: true },
  // Leads
  // {
  //   id: "leads", label: "Leads", roles: ["carrier", "lead", "sale"],
  //   subItems: [
  //     { label: makeLabel(SiWebmoney, "primary", "New Leads"), href: "/admin/newLeads" },
  //     { label: makeLabel(FaBell, "accent", "Follow Up"), href: "/admin/notification" },
  //     { label: makeLabel(FaEnvelope, "purple", "Emails"), href: "/admin/leads/email" },
  //     { label: makeLabel(FaFileAlt, "indigo", "Reports"), href: "/admin/leads/report" },
  //     { label: makeLabel(FaComments, "pink", "Messages"), href: "/admin/leads/messages" },
  //     { label: makeLabel(FaHandsHelping, "danger", "Internal Assistance"), href: "/admin/leads/assistance" }
  //   ]
  // },

  // Sales
  // {
  //   id: "sales", label: "Sales", roles: ["sale"],
  //   subItems: [
  //     { label: makeLabel(FaChartLine, "primary", "Leads"), href: "/admin/sale/leads" },
  //     { label: makeLabel(FaUsers, "secondary", "Customers"), href: "/admin/sale/customer" },
  //     { label: makeLabel(FaBell, "accent", "Followups"), href: "/admin/sale/followups" },
  //     { label: makeLabel(FaEnvelope, "purple", "Emails"), href: "/admin/sale/email" },
  //     { label: makeLabel(FaFileAlt, "indigo", "Reports"), href: "/admin/sale/report" },
  //     { label: makeLabel(FaComments, "pink", "Messages"), href: "/admin/sale/messages" },
  //     { label: makeLabel(FaHandsHelping, "danger", "Internal Assistance"), href: "/admin/sale/assistance" }
  //   ]
  // },

  // Carriers
  // {
  //   id: "carriers", label: "Carriers", roles: ["sale", "carrier"],
  //   subItems: [
  //     { label: makeLabel(FaTruck, "primary", "Leads"), href: "/admin/carrier/leads" },
  //     { label: makeLabel(FaShippingFast, "secondary", "Carriers"), href: "/admin/carrier/carrier" },
  //     { label: makeLabel(FaBell, "accent", "Followups"), href: "/admin/carrier/followup" },
  //     { label: makeLabel(FaEnvelope, "purple", "Emails"), href: "/admin/carrier/email" },
  //     { label: makeLabel(FaFileAlt, "indigo", "Reports"), href: "/admin/carrier/report" },
  //     { label: makeLabel(FaComments, "pink", "Messages"), href: "/admin/carrier/messages" },
  //     { label: makeLabel(FaHandsHelping, "danger", "Internal Assistance"), href: "/admin/carrier/assistance" }
  //   ]
  // },

  // Accounts
  {
    id: "accounts", label: "Accounts", roles: ["account", "carrier", "sale"],
    subItems: [
      {
        label: "Rates", subMenu: true, items: [
          { label: makeLabel(FaMoneyBillWave, "primary", "CC Rates"), href: "/admin/cc/rates" },
          { label: makeLabel(FaCreditCard, "secondary", "CLI Rates"), href: "/admin/cli/rates" },
          { label: makeLabel(FaStar, "accent", "Special Rates"), href: "/admin/special/rates" },
          { label: makeLabel(FaBullseye, "purple", "Targeted Rates"), href: "/admin/targeted/rates" },
          { label: makeLabel(FaPercentage, "secondary", "Offer Rates"), href: "/admin/offer/rates" }
        ]
      },
      {
        label: "Recharge", subMenu: true, items: [
          { label: makeLabel(FaWallet, "teal", "Recharge Form"), href: "/admin/recharge" },
          { label: makeLabel(FaFileInvoiceDollar, "cyan", "Payment Form"), href: "/admin/vendor_form" }
        ]
      },
      ...(["account","sale"].includes(adminRole) ? [
        {
          label: "Requests", subMenu: true, items: [
            { label: makeLabel(FaWallet, "teal", "Recharge Requests"), href: "/admin/recharge_requests" },
            { label: makeLabel(FaFileInvoiceDollar, "cyan", "Payment Requests"), href: "/admin/vendorpayment" },
            ...(["account"].includes(adminRole) ? [

              { label: makeLabel(FaMoneyBillWave, "primary", "Over Draft Requests"), href: "/admin/overdraft_requests" },
              { label: makeLabel(FaStar, "accent", "Private Rate Requests"), href: "/admin/privaterate_requests" },
              { label: makeLabel(FaFileAlt, "indigo", "Reports"), href: "/admin/account/report" },
              { label: makeLabel(FaEnvelope, "purple", "Email"), href: "/admin/account/email" },
              { label: makeLabel(FaTicketAlt, "pink", "My Tickets"), href: "/admin/account/myticket" }
            ] : [])
          ]
        },
        { label: makeLabel(FaBell, "accent", "Follow-Ups"), href: "/admin/account/followup" },
        { label: makeLabel(FaComments, "dark", "Messages"), href: "/admin/account/messages" },
        { label: makeLabel(FaHandsHelping, "danger", "Internal Assistance"), href: "/admin/account/assistance" }
      ] : [])
    ]
  },

  // Support
  // {
  //   id: "support", label: "Support", roles: ["support", "sale"],
  //   subItems: [
  //     { label: makeLabel(FaTools, "primary", "Trouble Tickets"), href: "/admin/support/troubleTickets" },
  //     { label: makeLabel(FaFlask, "secondary", "Testing"), href: "/admin/support/testing" },
  //     { label: makeLabel(FaBell, "accent", "Follow-Ups"), href: "/admin/support/followups" },
  //     ...(["support"].includes(adminRole) ? [
  //       { label: makeLabel(FaTasks, "purple", "Tasks"), href: "/admin/support/task" },
  //       { label: makeLabel(FaTicketAlt, "pink", "My Tickets"), href: "/admin/support/myTickets" },
  //       { label: makeLabel(FaEnvelope, "indigo", "Email"), href: "/admin/support/email" }
  //     ] : []),
  //     { label: makeLabel(FaComments, "dark", "Messages"), href: "/admin/support/messages" },
  //     { label: makeLabel(FaHeadset, "danger", "Internal Assistance"), href: "/admin/support/internalassistence" }
  //   ]
  // },

  // Communications
  // {
  //   id: "communications", label: "Communications", roles: ["lead"],
  //   subItems: [
  //     { label: makeLabel(FaPhoneAlt, "primary", "Enquires"), href: "/admin/communication/enquiry" },
  //     { label: makeLabel(FaHashtag, "secondary", "DID Numbers"), href: "/admin/communication/didEnquiry" },
  //     { label: makeLabel(FaTicketAlt, "accent", "My Tickets"), href: "/admin/communication/myTickets" },
  //     { label: makeLabel(FaEnvelope, "purple", "Emails"), href: "/admin/communication/email" },
  //     { label: makeLabel(FaComments, "indigo", "Chat Panel"), href: "/admin/communication/chatpanel" },
  //     { label: makeLabel(FaComments, "pink", "Messages"), href: "/admin/communication/messages" },
  //     { label: makeLabel(FaHeadset, "danger", "Internal Assistance"), href: "/admin/communication/assistance" }
  //   ]
  // },

  // Settings
  {
    id: "settings", label: "Settings", roles: ["carrier", "lead", "account", "sale", "support"],
    subItems: [
      ...(["carrier", "lead", "account", "sale", "support"].includes(adminRole) ? [
        { label: makeLabel(FaUsers, "primary", "Staff Management"), href: "/admin/staff-management" },
        { label: makeLabel(FaUsersCog, "secondary", "CRM Management"), href: "/admin/customer-management" },
      ] : [])
    ]
  }
];
