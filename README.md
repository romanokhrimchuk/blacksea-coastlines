### Mapping Black Sea's dynamic coastline at MSL using Sentinel-2 Imagery

This repository provides a visual representation of the Black Sea coastlinefor the period **2017–2024**, derived using remote sensing (Sentinel-2 imagery) and modeled tidal heights at Mean Sea Level (MSL).

The core datasets are: **annual coastline layers** and **a coastline change-rate point layer** with a default spacing of 100 m.

I have also computed coastline change-rate datasets with a range of point spacings (in meters):

`2, 5, 10, 20, 50, 100 (used in this repo as an example), 200, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 7500, 10000`

If you are interested in any of these alternative point spacings, please contact me to access these datasets.

For an interactive overview of the derived datasets, visit:  
--> [Map Preview](https://romanokhrimchuk.github.io/blacksea-coastlines/map_preview.html)

### Methodology

This repo presents a tide-aware workflow for extracting subpixel coastline positions from Sentinel-2 imagery archive (2017–2024) across the Black Sea region. Designed for use with [Open Data Cube (ODC)](https://www.opendatacube.org/), the approach enables scalable, multi-year coastal monitoring across different coastal settings (Okhrimchuk, et. al, 2024). For each image, the Modified Normalized Difference Water Index (MNDWI) was computed to enhance the land-water boundary. Tidal heights, modeled at a 1/30° spatial resolution using the [TPXO10-atlas-v2 global tide model](https://www.tpxo.net/global/tpxo10-atlas) (release date: *14 August 2024*) (Egbert, et. al, 2022) and [pyTMD library](https://github.com/pyTMD/pyTMD), were interpolated across the image stack based on time dimension for pixel-level tidal correction. To minimize tidal bias, a filtering procedure excluded observations outside the central 50% of the tidal range, retaining only images captured near median tide levels for consistent coastline detection. Annual composites were created by calculating median reflectance values from the tidally-masked stack, providing an estimate of coastline position at approximately mean sea level. coastlines were then extracted using optimized thresholding and segmentation for subpixel precision (Bishop-Taylor et al., 2021). The final outputs are a series of coastline products normalized to a common tidal reference, enabling unbiased comparisons of coastal change across space and time.
As shown in Figure 1, this method integrates open-access satellite imagery, global tidal models, and cloud-native geospatial tools. The resulting coastline datasets support consistent, scalable, and repeatable coastal analysis, offering a robust foundation for monitoring coastline dynamics along the Black Sea coast and beyond.
<img width="1600" height="500" alt="image" src="https://github.com/user-attachments/assets/7c8cb9e9-f0fe-4fbc-b7db-fc7920c73a28" />
Figure 1. Subpixel coastline extraction workflow using ODC and tide modelling

`Lexcube is used for 3D visualization of the data cubes shown in Figure 1. I highly recommend it to researchers and professionals working with multi-dimensional spatio-temporal data (Sochting et al., 2024)`

The extraction of coastlines is based on a modified implementation of the methodologies developed for [Digital Earth Australia](https://knowledge.dea.ga.gov.au/) & [Digital Earth Africa](https://digitalearthafrica.org/en_za/) platforms.

### References

Bishop-Taylor, R., Nanson, R., Sagar, S., & Lymburner, L. (2021). Mapping Australia’s dynamic coastline at mean sea level using three decades of Landsat imagery. Remote Sensing of Environment, 267(112734), 112734. https://doi.org/10.1016/j.rse.2021.112734.

Egbert, G. D., & Erofeeva, S. Y. (2002). Efficient inverse modeling of barotropic ocean tides. Journal of Atmospheric and Oceanic Technology, 19(2), 183–204. https://doi.org/10.1175/1520-0426(2002)019%3C0183:EIMOBO%3E2.0.CO;2

Sochting, M., Mahecha, M. D., Montero, D., & Scheuermann, G. (2024). Lexcube: Interactive visualization of large Earth system data cubes. IEEE Computer Graphics and Applications, 44(1), 25–37. https://doi.org/10.1109/MCG.2023.3321989

Okhrimchuk, R., Demidov, V., & Sliusar, K. (2024). Innovative approaches to big Earth observation data processing in Earth science. In Proceedings of the International Conference of Young Professionals “GeoTerrace 2024” (pp. 1–5). https://doi.org/10.3997/2214-4609.2024510006.

### Acknowledgements

I would like to express my sincere gratitude to the following people for their support and contributions that made this project possible:

1. **[Dr Robbi Bishop-Taylor](https://scholar.google.com/citations?user=iutCriAAAAAJ&hl=en)**  
I greatly appreciate his paper on the [coastline mapping methodology](https://doi.org/10.1016/j.rse.2021.112734) and his contributions to the [open-source Digital Earth Australia Coastlines codebase](https://github.com/GeoscienceAustralia/dea-coastlines). His research, code development, and open tools strongly inspired me to work on this pet project.

2. **[Dr Svetlana Erofeeva](https://scholar.google.com/citations?user=09b27-sAAAAJ&hl=en)**  
I am deeply thankful for her work on the [modeling of barotropic ocean tides](https://doi.org/10.1175/1520-0426(2002)019%3C0183:EIMOBO%3E2.0.CO;2) and for providing me with access to the TPXO10-atlas-v2 model (release date: *14 August 2024*). 

3. **[Dr Kenneth Mubea](https://scholar.google.com/citations?user=4-osC5wAAAAJ&hl=en) & [Technical Manager - Edward Boamah](https://digitalearthafrica.org/en_za/meet-edward-our-new-technical-manager/)**  
Many thanks to both of them for their technical advice and consultations, as well as for clarifying the implementation details of the coastline methodology within the open and free [Digital Earth Africa](https://github.com/digitalearthafrica/deafrica-coastlines) platform.

### Contact

If you have any questions, are interested in additional versions of the change-rate or annual coastline datasets, or would like to explore a collaboration, feel free to reach out:

- **Email:** romanokhrimchuk@gmail.com  
- **LinkedIn:** https://www.linkedin.com/in/roman-okhrimchuk/
