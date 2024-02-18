import { Provider } from "react-redux";
import { store } from "../../features/store";
import { TreePanel } from "../../widgets/tree";
import { PropertiesPanel } from "../../widgets/properties";
import { CanvasPanel } from "../../widgets/canvas";
import { ResourcesPanel } from "../../widgets/resources";
import { HeaderPanel } from "../../widgets/header";

export function EditorPage() {
  return (
    <Provider store={store}>
      <div className="h-screen text-white">
        <HeaderPanel />
        <div id="main" className="flex h-full ">
          <div id="left-panel" className="w-1/5 bg-gray-700 ">
            <TreePanel />
          </div>
          <div id="center-panel" className="w-3/5">
            <div id="canvas" className="h-2/3">
              <CanvasPanel />
            </div>
            <div id="resources" className="h-1/3 bg-gray-800 ">
              <ResourcesPanel />
            </div>
          </div>
          <div id="right-panel" className="w-1/5 bg-gray-700 ">
            <PropertiesPanel />
          </div>
        </div>
      </div>
    </Provider>
  );
}
