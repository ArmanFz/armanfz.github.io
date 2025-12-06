This project explores a novel interaction index based on the **Hankel Norm** for selecting input-output pairings in Multi-Input Multi-Output (MIMO) systems. The study compares this new dynamic interaction measure against the traditional **Relative Gain Array (RGA)** method. The goal is to identify the most effective decentralized control structure by evaluating system controllability and observability through Gramians.

## ⚙️ Methodology

### 1. Interaction Measures
The core analysis revolves around two primary metrics for determining which input should control which output:

*   **Relative Gain Array (RGA):** A static measure relying on steady-state gain ($$G(0)$$). While useful, it often fails to account for dynamic interactions at non-zero frequencies.
*   **Hankel Interaction Index ($$\Sigma_H$$):** A dynamic measure proposed in this project. It uses the Hankel singular values derived from the system's controllability ($$\Gamma_c$$) and observability ($\Gamma_o$) Gramians.
    *   The index is defined as the normalized Hankel norm of each sub-system:
        $$ [\Sigma_H]_{ij} = \frac{\| G_{ij}(z) \|_H}{\sum_{i,j} \| G_{ij}(z) \|_H} $$
    *   This method captures the dynamic energy transfer between inputs and outputs, offering a more comprehensive view of coupling.

### 2. Simulation & Case Studies
The project evaluates these measures across multiple discrete and continuous MIMO systems, including:
*   **Example 1 & 2:** Discrete transfer function matrices used to demonstrate cases where RGA and Hankel indices agree or disagree.
*   **Case Study 1:** A continuous 3x3 system ($$G(s)$$) where the Hankel index suggests a different, more stable pairing than RGA.
*   **Case Study 2:** A distillation column model (Wood & Berry) to verify performance on physical processes.

## 📊 Results & Comparison

The study concludes that the Hankel-based measure often outperforms RGA, particularly for systems with significant dynamic interactions or non-minimum phase behaviors.

### Key Findings:
*   **Example 2 (Conflict):** RGA suggested a diagonal pairing ($$u_1-y_1, u_2-y_2$$) which led to instability. The Hankel index suggested off-diagonal pairing ($$u_1-y_2, u_2-y_1$$), which resulted in a stable, well-tracking system.
*   **Case Study 1 (Performance):** Both methods yielded stable systems, but the Hankel-based pairing provided significantly better transient response and lower tracking error.

| Metric | RGA (Static) | Hankel Norm (Dynamic) |
| :--- | :--- | :--- |
| **Basis** | Steady-state gain | Dynamic Gramians ($$\Gamma_c, \Gamma_o$$) |
| **Example 2 Result** | Unstable Closed-Loop | **Stable Closed-Loop** |
| **Case Study 1 Result** | Slower response | **Faster, improved tracking** |

![Comparison of Responses](https://github.com/ArmanFz/armanfz.github.io/blob/master/assets/hankel.png)
*Figure 1: Step response comparison for Case Study 1. The Hankel-based pairing (Blue/Solid) shows superior settling time compared to RGA (Red/Dashed).*

## 📝 Conclusion
The Hankel-norm interaction index provides a robust alternative to RGA for control configuration selection. By incorporating reachability and observability properties, it correctly identifies stable pairings in cases where static measures fail, making it highly effective for designing decentralized controllers for complex multivariable processes.

### References
*   Wittenmark, B., & Salgado, M. E. (2002). *Hankel-norm based interaction measure for input-output pairing*.
*   Khaki-Sedigh, A., & Moaveni, B. (2009). *Control configuration selection for multivariable plants*.
