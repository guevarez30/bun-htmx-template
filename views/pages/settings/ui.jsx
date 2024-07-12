import { AlarmPlus, Ban } from "lucide-react";

function Subscription() {
  return <>subscription</>;
}

function UserSettings() {
  return <>settings</>;
}

export default function Settings({ data }) {
  const Content = data === "settings" ? <UserSettings /> : <Subscription />;
  return (
    <div class="h-full w-full flex flex-col m-5">
      <div role="tablist" class="tabs tabs-bordered">
        <a
          role="tab"
          class={`tab ${data === "settings" ? "tab-active" : ""}`}
          hx-get="/settings?tab=settings"
          hx-trigger="click"
          hx-target="#content"
          hx-swap="innerHTML"
        >
          Settings
        </a>
        <a
          role="tab"
          class={`tab ${data === "subscription" ? "tab-active" : ""}`}
          hx-get="/settings?tab=subscription"
          hx-trigger="click"
          hx-target="#content"
          hx-swap="innerHTML"
        >
          Subscription
        </a>
      </div>
      {Content}
    </div>
  );
}
