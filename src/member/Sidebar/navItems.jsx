import {
  // FontAwesome icons
  FaChartLine,
  FaUsers,
  FaBell,
  FaEnvelope,
  FaFileAlt,
  FaComments,
  FaHandsHelping,
  FaTruck,
  FaShippingFast,
  FaMoneyBillWave,
  FaCreditCard,
  FaStar,
  FaBullseye,
  FaPercentage,
  FaWallet,
  FaFileInvoiceDollar,
  FaTools,
  FaTicketAlt,
  FaFlask,
  FaTasks,
  FaHeadset,
  FaPhoneAlt,
  FaHashtag,
  FaUserCog,
  FaUsersCog,
  FaExchangeAlt,
} from 'react-icons/fa';

import { SiWebmoney } from 'react-icons/si';
import { HomeIcon } from "@heroicons/react/24/solid";

// Color definitions
const iconColors = {
  primary: "#3B82F6",    // Blue
  secondary: "#10B981",  // Emerald
  accent: "#F59E0B",     // Amber
  danger: "#EF4444",     // Red
  purple: "#8B5CF6",     // Purple
  indigo: "#6366F1",     // Indigo
  pink: "#EC4899",       // Pink
  teal: "#14B8A6",       // Teal
  cyan: "#06B6D4",       // Cyan
  dark: "#1F2937",       // Dark gray
  light: "#6B7280"       // Light gray
};

const iconStyle = (colorKey = 'primary') => ({
  color: iconColors[colorKey] || iconColors.primary,
  fontSize: "25px",
  marginLeft: "12px",
  marginTop: "12px"
});

export const getNavItems = (adminRole) => {
  return [
    {
      id: 'dashboard',
      icon: <HomeIcon className="h-8 w-8 text-orange-400" />
      ,
      href: "/member/dashboard",
      roles: ['all'],
      mobileOnly: true
    },
    {
      id: 'leads',
      label: "Leads",
      roles: ["carrier", "lead", "leadmember", "superAdmin", "salemember", 'sale'],
      subItems: [
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <SiWebmoney style={iconStyle('primary')} />
              </div>
              <span>New Leads</span>
            </div>
          ),
          href: "/member/newLeads"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaBell style={iconStyle('accent')} />
              </div>
              <span>Follow Up</span>
            </div>
          ),
          href: "/member/notification"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaEnvelope style={iconStyle('purple')} />
              </div>
              <span>Emails</span>
            </div>
          ),
          href: "/member/leads/email"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaFileAlt style={iconStyle('indigo')} />
              </div>
              <span>Reports</span>
            </div>
          ),
          href: "/member/leads/report"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaComments style={iconStyle('pink')} />
              </div>
              <span>Messages</span>
            </div>
          ),
          href: "/member/leads/messages"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaHandsHelping style={iconStyle('danger')} />
              </div>
              <span>Internal Assistance</span>
            </div>
          ),
          href: "/member/leads/assistance"
        }
      ]
    },
    {
      id: 'sales',
      label: "Sales",
      roles: ['sale', 'superAdmin', "salemember"],
      subItems: [
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaChartLine style={iconStyle('primary')} />
              </div>
              <span>Leads</span>
            </div>
          ),
          href: "/member/sale/leads"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaUsers style={iconStyle('secondary')} />
              </div>
              <span>Customers</span>
            </div>
          ),
          href: "/member/sale/customer"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaBell style={iconStyle('accent')} />
              </div>
              <span>Followups</span>
            </div>
          ),
          href: "/member/sale/followups"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaEnvelope style={iconStyle('purple')} />
              </div>
              <span>Emails</span>
            </div>
          ),
          href: "/member/sale/email"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaFileAlt style={iconStyle('indigo')} />
              </div>
              <span>Reports</span>
            </div>
          ),
          href: "/member/sale/report"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaComments style={iconStyle('pink')} />
              </div>
              <span>Messages</span>
            </div>
          ),
          href: "/member/sale/messages"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaHandsHelping style={iconStyle('danger')} />
              </div>
              <span>Internal Assistance</span>
            </div>
          ),
          href: "/member/sale/assistance"
        }
      ]
    },
    {
      id: 'carriers',
      label: "Carriers",
      roles: ["sale", "carrier", "superAdmin", "salemember", "carriermember"],
      subItems: [
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaTruck style={iconStyle('primary')} />
              </div>
              <span>Leads</span>
            </div>
          ),
          href: "/member/carrier/leads"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaShippingFast style={iconStyle('secondary')} />
              </div>
              <span>Carriers</span>
            </div>
          ),
          href: "/member/carrier/carrier"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaBell style={iconStyle('accent')} />
              </div>
              <span>Followups</span>
            </div>
          ),
          href: "/member/carrier/followup"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaEnvelope style={iconStyle('purple')} />
              </div>
              <span>Emails</span>
            </div>
          ),
          href: "/member/carrier/email"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaFileAlt style={iconStyle('indigo')} />
              </div>
              <span>Reports</span>
            </div>
          ),
          href: "/member/carrier/report"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaComments style={iconStyle('pink')} />
              </div>
              <span>Messages</span>
            </div>
          ),
          href: "/member/carrier/messages"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaHandsHelping style={iconStyle('danger')} />
              </div>
              <span>Internal Assistance</span>
            </div>
          ),
          href: "/member/carrier/assistance"
        }
      ]
    },
    {
      id: 'accounts',
      label: "Accounts",
      roles: ["account", "carrier", "sale", "superAdmin", "accountMember", "salemember", "carrierMember"],
      subItems: [
        {
          label: "Rates",
          subMenu: true,
          items: [
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaMoneyBillWave style={iconStyle('primary')} />
                  </div>
                  <span>CC Rates</span>
                </div>
              ),
              href: "/member/ccrates"
            },
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaCreditCard style={iconStyle('secondary')} />
                  </div>
                  <span>CLI Rates</span>
                </div>
              ),
              href: "/member/clirates"
            },
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaStar style={iconStyle('accent')} />
                  </div>
                  <span>Special Rates</span>
                </div>
              ),
              href: "/member/specialrates"
            },
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaBullseye style={iconStyle('purple')} />
                  </div>
                  <span>Targeted Rates</span>
                </div>
              ),
              href: "/member/targetedrates"
            },
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaPercentage style={iconStyle('green')} /> {/* Option 1 */}
                  </div>
                  <span>Offer Rates</span>
                </div>
              ),
              href: "/member/offer/rates"
            }
          ]
        },
        {
          label: "Recharge",
          subMenu: true,
          items: [
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaWallet style={iconStyle('teal')} />
                  </div>
                  <span>Recharge Form</span>
                </div>
              ),
              href: "/member/recharge"
            },
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaFileInvoiceDollar style={iconStyle('cyan')} />
                  </div>
                  <span>Payment Form</span>
                </div>
              ),
              href: "/member/vendor_form"
            }
          ]
        },
        ...(["account", "superAdmin", "accountMember", "salemember", "sale"].includes(adminRole) ? [
          {
            label: "Requests",
            subMenu: true,
            items: [
              {
                label: (
                  <div className="flex items-center">
                    <div style={{
                      border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                    }}>
                      <FaWallet style={iconStyle('teal')} />
                    </div>
                    <span>Recharge Requests</span>
                  </div>
                ),
                href: "/member/recharge_requests"
              },
              {
                label: (
                  <div className="flex items-center">
                    <div style={{
                      border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                    }}>
                      <FaFileInvoiceDollar style={iconStyle('cyan')} />
                    </div>
                    <span>Payment Requests</span>
                  </div>
                ),
                href: "/member/vendorpayment"
              },
              ...(["account", "accountMember", "superAdmin"].includes(adminRole) ? [

                {
                  label: (
                    <div className="flex items-center">
                      <div style={{
                        border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                      }}>
                        <FaMoneyBillWave style={iconStyle('primary')} />
                      </div>
                      <span>Over Draft Requests</span>
                    </div>
                  ),
                  href: "/admin/overdraft_requests"
                },
                {
                  label: (
                    <div className="flex items-center">
                      <div style={{
                        border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                      }}>
                        <FaStar style={iconStyle('accent')} />
                      </div>
                      <span>Private Rate Requests</span>
                    </div>
                  ),
                  href: "/admin/privaterate_requests"
                }
              ] : []),
            ]
          },
          ...(["account", "accountMember", "superAdmin"].includes(adminRole) ? [
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaFileAlt style={iconStyle('indigo')} />
                  </div>
                  <span>Reports</span>
                </div>
              ),
              href: "/admin/account/report"
            },
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaEnvelope style={iconStyle('purple')} />
                  </div>
                  <span>Email</span>
                </div>
              ),
              href: "/admin/account/email"
            },
            {
              label: (
                <div className="flex items-center">
                  <div style={{
                    border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                  }}>
                    <FaTicketAlt style={iconStyle('pink')} />
                  </div>
                  <span>My Tickets</span>
                </div>
              ),
              href: "/admin/account/myticket"
            }
          ] : []),
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaBell style={iconStyle('accent')} />
                </div>
                <span>Follow-Ups</span>
              </div>
            ),
            href: "/member/account/followup"
          },
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaComments style={iconStyle('dark')} />
                </div>
                <span>Messages</span>
              </div>
            ),
            href: "/member/account/messages"
          },
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaHandsHelping style={iconStyle('danger')} />
                </div>
                <span>Internal Assistance</span>
              </div>
            ),
            href: "/member/account/assistance"
          }
        ] : [])
      ]
    },
    {
      id: 'support',
      label: "Support",
      roles: ["superAdmin", "support", "supportMember", "salemember", "sale"],
      subItems: [
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaTools style={iconStyle('primary')} />
              </div>
              <span>Trouble Tickets</span>
            </div>
          ),
          href: "/member/support/troubleTickets"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaFlask style={iconStyle('secondary')} />
              </div>
              <span>Testing</span>
            </div>
          ),
          href: "/member/support/testing"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaBell style={iconStyle('accent')} />
              </div>
              <span>Follow-Ups</span>
            </div>
          ),
          href: "/member/support/followups"
        },
        ...(["superAdmin", "support", "supportMember"].includes(adminRole) ? [
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaTasks style={iconStyle('purple')} />
                </div>
                <span>Tasks</span>
              </div>
            ),
            href: "/admin/support/task"
          },
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaTicketAlt style={iconStyle('pink')} />
                </div>
                <span>My Tickets</span>
              </div>
            ),
            href: "/admin/support/myTickets"
          },
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaEnvelope style={iconStyle('indigo')} />
                </div>
                <span>Email</span>
              </div>
            ),
            href: "/admin/support/email"
          },
        ] : []),
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaComments style={iconStyle('dark')} />
              </div>
              <span>Messages</span>
            </div>
          ),
          href: "/member/support/messages"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaHeadset style={iconStyle('danger')} />
              </div>
              <span>Internal Assistance</span>
            </div>
          ),
          href: "/member/support/internalassistence"
        }
      ]
    },
    {
      id: 'communications',
      label: "Communications",
      roles: ["superAdmin", "lead", "leadmember"],
      subItems: [
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaPhoneAlt style={iconStyle('primary')} />
              </div>
              <span>Enquires</span>
            </div>
          ),
          href: "/member/communication/enquiry"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaHashtag style={iconStyle('secondary')} />
              </div>
              <span>DID Numbers</span>
            </div>
          ),
          href: "/member/communication/didEnquiry"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaTicketAlt style={iconStyle('accent')} />
              </div>
              <span>My Tickets</span>
            </div>
          ),
          href: "/member/communication/myTickets"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaEnvelope style={iconStyle('purple')} />
              </div>
              <span>Emails</span>
            </div>
          ),
          href: "/member/communication/email"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaComments style={iconStyle('indigo')} />
              </div>
              <span>Chat Panel</span>
            </div>
          ),
          href: "/member/communication/chatpanel"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaComments style={iconStyle('pink')} />
              </div>
              <span>Messages</span>
            </div>
          ),
          href: "/member/communication/messages"
        },
        {
          label: (
            <div className="flex items-center">
              <div style={{
                border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
              }}>
                <FaHeadset style={iconStyle('danger')} />
              </div>
              <span>Internal Assistance</span>
            </div>
          ),
          href: "/member/communication/assistance"
        }
      ]
    },
    {
      id: 'settings',
      label: "Settings",
      roles: ["superAdmin", "carrier", "lead", "account", "sale", "support"],
      subItems: [
        ...(["superAdmin"].includes(adminRole) ? [
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaUserCog style={iconStyle('primary')} />
                </div>
                <span>User Management</span>
              </div>
            ),
            href: "/admin/settings_page"
          },
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaUsersCog style={iconStyle('secondary')} />
                </div>
                <span>CRM Management</span>
              </div>
            ),
            href: "/admin/customermanagement"
          },
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaUsers style={iconStyle('accent')} />
                </div>
                <span>Staff Management</span>
              </div>
            ),
            href: "/admin/allstaffmanagement"
          },
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaExchangeAlt  style={iconStyle('secondary')} />
                </div>
                <span>Transfer Manager</span>
              </div>
            ),
            href: "/admin/manager-transfers"
          }
        ] : []),
        ...(["carrier", "lead", "account", "sale", "support"].includes(adminRole) ? [
          {
            label: (
              <div className="flex items-center">
                <div style={{
                  border: "1px solid", height: "50px", width: "50px", borderRadius: "7px", marginRight: "13px"
                }}>
                  <FaUsers style={iconStyle('primary')} />
                </div>
                <span>Staff Management</span>
              </div>
            ),
            href: "/admin/staffmanagement"
          }
        ] : [])
      ]
    }
  ];
};