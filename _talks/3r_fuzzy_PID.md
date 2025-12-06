---
title: "Design of PID and Fuzzy Logic Controller for a 3R Non-Planar Robot"
collection: talks
type: "Talk"
permalink: /talks/3r_fuzzy_PID
venue: ""
date: 2022-05-01

location: ""
---

This project involves the design, evaluation, and comparison of two control strategies—**PID (Proportional-Integral-Derivative)** and **Fuzzy Logic Control (FLC)**—for a 3R non-planar robot. The primary goal was to calculate the required torques for the robot joints to accurately track a trajectory from an initial position to a desired target within 10 seconds.

![3R Robot Scheme](https://github.com/ArmanFz/armanfz.github.io/blob/master/assets/3r_robot/3r%20robot.PNG)
*Figure 1: Schematic of the 3R robot model.*

### 1. Robot Modeling
The robot is a 3-degree-of-freedom mechanical arm modeled using ordinary differential equations (ODEs). The system dynamics account for the mass and length of three links ($$L_1, L_2, L_3$$) and the payload mass ($$M$$).
- **Trajectory Planner:** Designed in Simulink to convert desired Cartesian positions $$(x_d, y_d, z_d)$$ into joint angles over time.
- **Dynamics:** The equations of motion were derived and implemented using Simulink integrator blocks to solve for joint accelerations.

![Trajectory Planner Block](path/to/figure2_trajectory_planner.png)
*Figure 2: Trajectory planner implementation in Simulink.*

### 2. Control Strategies
Two distinct controllers were designed to manage the torque for the robot's three arms:

*   **PID Controller:**
    *   **Inputs:** Angular error.
    *   **Tuning:** Parameters set to $$K_p = 50$$, $$K_i = 50$$, $$K_d = 5$$.
    *   **Constraint:** Torque output limited to prevent saturation.

![PID Controller Design](https://github.com/ArmanFz/armanfz.github.io/blob/master/assets/3r_robot/Tuning-a-PID-regulator.-Fig1.jpg)
*Figure 3: PID Controller System Design.*

*   **Fuzzy Logic Controller (FLC):**
    *   **Inputs:** Angular error ($$e_\theta$$) and angular speed error ($$e_\omega$$).
    *   **Structure:** 5 membership functions for inputs and 7 for the output, utilizing 25 distinct rules.
    *   **Complexity:** Required tuning of 42 parameters compared to only 3 for the PID.

![Fuzzy Logic Controller Design](https://github.com/ArmanFz/armanfz.github.io/blob/master/assets/3r_robot/fuzzy%20design.PNG)
*Figure 4: Fuzzy Logic Controller System Design in Simulink.*

### Results & Conclusion

Both controllers were simulated to track a movement from $$(1.5, 0, 1.5)$$ to $$(0, 0, 3)$$.

*   **Performance:** The Fuzzy Logic Controller demonstrated superior performance, achieving the desired position faster and with significantly less error than the PID controller.
*   **Trade-off:** While the FLC provided better accuracy (Final error $$\approx 0.0223$$), the PID controller was much simpler to implement and tune.

| Metric | PID Controller | Fuzzy Logic Controller |
| :--- | :--- | :--- |
| **Design Complexity** | Low (3 params) | High (42 params/rules) |
| **Response Speed** | Slower | Faster |
| **Tracking Error** | Higher | Lower |

![Simulation Results1](https://github.com/ArmanFz/armanfz.github.io/blob/master/assets/3r_robot/PID.png)
![Simulation Results2](https://github.com/ArmanFz/armanfz.github.io/blob/master/assets/3r_robot/fuzzy.png)
*Figure 5: Simulation output comparing controller performance.*
