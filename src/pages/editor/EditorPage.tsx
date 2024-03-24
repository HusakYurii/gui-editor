import { Provider } from "react-redux";
import { useEffect, useRef } from "react";
import { TServices } from "../../types/shared/services";
import { ServiceContext } from "../../shared/services";
import { ContextMenuService } from "../../shared/services/contextmenu";
import { store } from "../../features/store";
import { TreeWidget } from "../../widgets/tree";
import { PropertiesWidget } from "../../widgets/properties";
import { CanvasWidget } from "../../widgets/canvas";
import { ResourcesWidget } from "../../widgets/resources";
import { HeaderWidget } from "../../widgets/header";

export function EditorPage() {
  const contextmenuContainer = useRef(document.createElement("div"));
  const services: TServices = {
    contextMenu: new ContextMenuService(),
  };

  useEffect(() => {
    Object.keys(services).forEach((key) => {
      return services[key as keyof TServices].initialize({
        container: contextmenuContainer.current,
      });
    });

    return () => {
      Object.keys(services).forEach((key) => {
        services[key as keyof TServices].destroy();
      });
    };
  }, [contextmenuContainer]);

  return (
    <Provider store={store}>
      <ServiceContext.Provider value={services}>
        <div
          id="contextmenu-container"
          className="absolute z-30"
          ref={contextmenuContainer}
        ></div>
        <main className="h-screen text-white absolute w-full z-10">
          <div className="absolute w-full">
            <HeaderWidget />
          </div>

          <div className="flex h-svh pt-10">
            <div id="left-panel" className="w-1/5 bg-gray-700 ">
              <TreeWidget />
            </div>
            <div id="center-panel" className="w-3/5">
              <div id="canvas" className="h-2/3">
                <CanvasWidget />
              </div>
              <div id="resources" className="h-1/3 bg-gray-800 ">
                <ResourcesWidget />
              </div>
            </div>
            <div id="right-panel" className="w-1/5 bg-gray-700 ">
              <PropertiesWidget />
            </div>
          </div>
        </main>
      </ServiceContext.Provider>
    </Provider>
  );
}
