import Header from "./app/header";
import Navigation from "./app/nav";
import Dashboard from "../pages/dashboard/ui";

export default function App() {
  return (
    <>
      <div class="drawer lg:drawer-open">
        <input id="drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <div class="bg-base-100 text-base-content sticky top-0 z-30 flex flex-col h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
            <Header />
          </div>
          <div id="content" class="max-w-[100vw] px-6 pb-16 xl:pr-2">
            <Dashboard />
          </div>
        </div>
        <div
          class="drawer-side z-40"
          style="scroll-behavior: smooth; scroll-padding-top: 5rem;"
        >
          <label
            for="drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          />
          <Navigation />
        </div>
      </div>
    </>
  );
}
