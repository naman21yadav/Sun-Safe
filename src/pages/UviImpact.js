import React from "react";
import Header from "../components/Header";
import "./UviImpact.css";

import incidence from "../final_vis/incidence.png";
import map from "../final_vis/map.png";
import melb_uv from "../final_vis/melb_uv.png";
import mortality from "../final_vis/mortality.png";
function UviImpact() {
  return (
    <>
      <Header />
      <div className="impact-title">
        Understanding the Impact of Skin Cancer in Australia and UV Impact in
        Melbourne
      </div>
      <div className="image-container">
        <p className="graph-title">Skin Cancer Mortality Trends (1971-2020)</p>
        <img src={mortality} alt="" />
        <p className="graph-desc mb">
          This graph illustrates the total number of deaths due to melanoma and
          non-melanoma skin cancer in Australia between 1971 and 2020, separated
          by gender. The graph's two-tone shading emphasizes the distinction
          between melanoma and non-melanoma skin cancers, highlighting the
          significant impact of both types on public health. The graph
          emphasizes the growing concern over skin cancer fatalities in the
          country and underscores the need for effective prevention and
          treatment strategies.
        </p>

        <p className="graph-title">
          Melanoma Incidence by Age and Gender (1982-2020)
        </p>
        <img src={incidence} alt="" className="mb" />
        <p className="graph-desc mb">
          The bar chart breaks down melanoma skin cancer incidences by age group
          and gender, showing a higher prevalence in older age groups,
          particularly among males aged 60-79. With numbers reaching over 89,000
          cases in this demographic, the visualization underlines the importance
          of targeted prevention measures for at-risk groups.
        </p>

        <p className="graph-title">
          Geographic Distribution of Melanoma Incidence (1982-2019)
        </p>
        <img src={map} alt="" className="mb" />
        <p className="graph-desc mb">
          This map of Australia depicts the incidence of melanoma skin cancer
          across different states and territories, differentiated by gender. The
          colour gradient illustrates the variance in incidence rates, with
          areas like Queensland showing significantly higher numbers. This
          evident information could be crucial for regional health services
          planning and resource allocation to address the high impact of skin
          cancer in specific areas. This geographic perspective is crucial for
          regional health planning and resource allocation.
        </p>

        <p className="graph-title">
          Monthly Variation of UV in Melbourne over the past decade
        </p>
        <img src={melb_uv} alt="" className="mb" />
        <p className="graph-desc mb">
          Highlighting the mean UV levels in Melbourne throughout different
          months, this bar chart reveals a higher UV index during the summer
          months (December to February), which coincides with increased
          recreational sun exposure. It visually explains the potential risk
          period for sun damage, emphasising the need for protective measures
          during these peak UV months.
        </p>
      </div>
    </>
  );
}

export default UviImpact;
