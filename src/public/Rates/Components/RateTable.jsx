import { translateCountry } from "../../../utils/countryTranslator";
import { dummyCliTranslatedHeaders, dummyTranslatedHeaders, ivrTranslations, outboundTranslations, statusTranslations } from "./DummyTranslateData/tableheaderdummydata";

const RateTable = ({
  paginatedRates,
  activeTab,
  selectionMode,
  selectedRates,
  selectedSection,
  handleRateSelection,
  handleSelectAll,
  getSelectedCount,
  selectedLanguage,
}) => {
  const headers =
    activeTab === "cli"
      ? dummyCliTranslatedHeaders[selectedLanguage] || dummyCliTranslatedHeaders["en"]
      : dummyTranslatedHeaders[selectedLanguage] || dummyTranslatedHeaders["en"];

  const currentLang = selectedLanguage || "en";

  return (
    <table className="min-w-full bg-white border rounded">
      <thead className="bg-blue-800 text-white">
        <tr>
          {selectionMode && (
            <th className="px-4 py-3 text-left font-normal">
              <input
                type="checkbox"
                checked={getSelectedCount() === paginatedRates.length && paginatedRates.length > 0}
                onChange={handleSelectAll}
                disabled={selectedSection && selectedSection !== activeTab}
              />
            </th>
          )}
          <th className="px-4 py-3 text-left font-normal">{headers.countryCode}</th>
          <th className="px-4 py-3 text-left font-normal">{headers.country}</th>
          <th className="px-4 py-3 text-left font-normal">{headers.qualityDescription}</th>
          {activeTab !== "cli" && (
            <th className="px-4 py-3 text-center font-normal">{headers.profile}</th>
          )}
          <th className="px-4 py-3 text-center font-normal">{headers.rate}</th>
          {activeTab === "cli" ? (
            <>
              <th className="px-4 py-3 text-left font-normal">{headers.billingCycle}</th>
              <th className="px-4 py-3 text-left font-normal">{headers.asr}</th>
              <th className="px-4 py-3 text-left font-normal">{headers.acd}</th>
              <th className="px-4 py-3 text-left font-normal">{headers.rtp}</th>
            </>
          ) : (
            <th className="px-4 py-3 text-center font-normal">{headers.billingCycle}</th>
          )}
          <th className="px-4 py-3 text-left font-normal">{headers.status}</th>
        </tr>
      </thead>

      <tbody>
        {paginatedRates.length === 0 ? (
          <tr>
            <td
              colSpan={
                selectionMode ? (activeTab === "cli" ? 11 : 8) : activeTab === "cli" ? 10 : 7
              }
              className="text-center py-4"
            >
              No results found.
            </td>
          </tr>
        ) : (
          paginatedRates.map((rate, index) => {
            const translatedStatus =
              statusTranslations[currentLang]?.[rate.status] || rate.status;

            // Compute translated profile outside JSX
            let translatedProfile = "-";
            const profileKey = rate.profile?.toLowerCase();
            if (profileKey) {
              if (profileKey.includes("outbound"))
                translatedProfile = outboundTranslations[currentLang] || rate.profile;
              else if (profileKey.includes("ivr"))
                translatedProfile = ivrTranslations[currentLang] || rate.profile;
              else translatedProfile = rate.profile;
            }

            return (
              <tr key={rate._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                {selectionMode && (
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedRates[selectedSection]?.includes(rate._id) || false}
                      onChange={() => handleRateSelection(rate._id)}
                      disabled={selectedSection && selectedSection !== activeTab}
                    />
                  </td>
                )}
                <td className="px-4 py-2">{rate.countryCode}</td>
                <td className="px-4 py-2">{translateCountry(rate.country, currentLang)}</td>
                <td className="px-4 py-2"> {rate.qualityDescription}</td>
                {
                  activeTab !== "cli" && (
                    <td className="px-4 py-2 text-center">{translatedProfile}</td>
                  )
                }

                <td className="px-4 py-2 text-center">{rate.rate}</td>

                {
                  activeTab === "cli" ? (
                    <>
                      <td className="px-4 py-2">{rate.billingCycle}</td>
                      <td className="px-4 py-2">{rate.asr}</td>
                      <td className="px-4 py-2">{rate.acd}</td>
                      <td className="px-4 py-2">{rate.rtp}</td>
                    </>
                  ) : (
                    <td className="px-4 py-2 text-center">{rate.billingCycle}</td>
                  )
                }

                <td
                  className={`px-4 py-2 ${rate.status?.toLowerCase() === "active"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                    }`}
                >
                  {translatedStatus}
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table >
  );
};

export default RateTable;
