"use client";
import { Image } from "primereact/image";
import { SerieForm } from "@/lib/components/SeriesForm";
import { About } from "@/lib/components/About";
import { Season } from "@/lib/components/Season";
import { Cast } from "@/lib/components/Cast";
import { Award } from "@/lib/components/Award";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";

export default function Page() {
  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6 p-5">
      <div className="flex align-items-start justify-content-center gap-4">
        <Image
          src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
          alt="Image"
          width="700"
          preview
        />
        <SerieForm />
      </div>
      <div>
        <div className="flex justify-content-center">
          <div className="card justify-content-center">
            <TabView>
              <TabPanel header="About" className="m-0">
                <About />
              </TabPanel>
              <TabPanel header="Seasons" className="m-0">
                <Season />
              </TabPanel>
              <TabPanel header="Cast" className="m-0">
                <Cast />
              </TabPanel>
              <TabPanel header="Awards" className="m-0">
                <Award />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-content-end p-6">
        <Button label="Save" icon="pi pi-check" size="large"></Button>
        <Button label="Cancel" icon="pi pi-times" size="large"></Button>
      </div>
    </div>
  );
}

//
/** Create Page Components
 * upload image
 * form
 * ========================
 * news cards
 * ========================
 * series cards
 * ========================
 * actor cards
 * ========================
 * datatable awards
 */
