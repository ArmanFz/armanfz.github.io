---
title: "Deep Learning based MS Lesion Segmentation in MRI images"
collection: talks
type: "Talk"
permalink: /talks/ms_project
venue: ""
date: 2025-01-01

location: ""
---

**Multiple sclerosis (MS)** is an autoimmune inflammatory disease of the central nervous system that disrupts communication within the brain and between the brain and the body. This disease is diagnosed by observing lesions in the brain and spinal cord Imaging. Magnetic resonance imaging (MRI) is one of the most important clinical tools for the diagnosis of MS, as MRI images show white matter (WM) lesions with high sensitivity. 

The development of MS lesions leads to a hydrophilic environment, which increases the signal on T2 and proton density-weighted MRI scans, while causing a decrease in signal on T1-weighted scans. Ovoid hyperintense regions on T2-weighted MRI are a radiological hallmark of MS. The visibility of these lesions can be impacted by the bright signal from cerebrospinal fluid (CSF), especially near the ventricles or cortical sulci.

FLAIR imaging, a type of T2-weighted scan, uses an inversion pulse to selectively suppress the CSF signal. On an MRI of the brain, MS is characterized by white matter lesions (or plaques) seen on FLAIR images. These plaques vary in size, shape, or location and are classified into 4 categories based on McDonald’s criteria, mainly based on their location: 

1.  **Periventricular lesion:** Lesions located in the vicinity of the lateral ventricles are often a sign of MS.
2.  **Juxtacortical lesion:** Lesions that are close to the surface of the cerebral cortex and are important to confirm the diagnosis of MS along with other lesions.
3.  **Infratentorial lesion:** Lesions found in the brainstem and cerebellum are important because of their role in diagnosing MS and affecting balance and coordination.
4.  **Deep white matter lesion:** Lesions that are located in the subcortical areas of the brain and indicate demyelination and are associated with cognitive decline and neurological deficits in MS.

Identifying MS lesions on MRI scans is a challenging task, as these lesions can appear differently in size, location, and shape due to anatomical differences between individuals. On the other hand, manual or semi-automatic segmentations are used to calculate the total number of lesions and the total volume of the lesion, which are challenging and time-consuming processes and prone to manual errors and inter-observer and expert changes. This has led to the development of various automated strategies in this field. Machine learning and deep learning methods are used to discover
the underlying and hidden features of MRI data. A significant advantage of deep learning-based methods is the automatic feature extraction that leads to effective and high-quality segmentation.


![MS](https://github.com/ArmanFz/armanfz.github.io/blob/master/assets/side_by_side_ms.gif)
