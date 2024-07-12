import Settings from "./ui";

const tabs = ["settings", "subscription"];
async function SettingsController({ query }) {
  let activeTab = query.tab;
  if (!tabs.includes(activeTab)) {
    activeTab = "settings";
  }

  return <Settings data={activeTab} />;
}

export default SettingsController;
