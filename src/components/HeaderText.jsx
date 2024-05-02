import React from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: rotate3d(0, 1, 0, 30deg);
  }
  1% {
    transform: rotate3d(0.0627905195, 0.9980267284, 0, 30deg);
  }
  2% {
    transform: rotate3d(0.1253332336, 0.9921147013, 0, 30deg);
  }
  3% {
    transform: rotate3d(0.1873813146, 0.9822872507, 0, 30deg);
  }
  4% {
    transform: rotate3d(0.2486898872, 0.9685831611, 0, 30deg);
  }
  5% {
    transform: rotate3d(0.3090169944, 0.9510565163, 0, 30deg);
  }
  6% {
    transform: rotate3d(0.3681245527, 0.9297764859, 0, 30deg);
  }
  7% {
    transform: rotate3d(0.4257792916, 0.9048270525, 0, 30deg);
  }
  8% {
    transform: rotate3d(0.4817536741, 0.87630668, 0, 30deg);
  }
  9% {
    transform: rotate3d(0.535826795, 0.8443279255, 0, 30deg);
  }
  10% {
    transform: rotate3d(0.5877852523, 0.8090169944, 0, 30deg);
  }
  11% {
    -webkit-transform: rotate3d(0.6374239897, 0.7705132428, 0, 30deg);
            transform: rotate3d(0.6374239897, 0.7705132428, 0, 30deg);
  }
  12% {
    -webkit-transform: rotate3d(0.6845471059, 0.7289686274, 0, 30deg);
            transform: rotate3d(0.6845471059, 0.7289686274, 0, 30deg);
  }
  13% {
    -webkit-transform: rotate3d(0.7289686274, 0.6845471059, 0, 30deg);
            transform: rotate3d(0.7289686274, 0.6845471059, 0, 30deg);
  }
  14% {
    -webkit-transform: rotate3d(0.7705132428, 0.6374239897, 0, 30deg);
            transform: rotate3d(0.7705132428, 0.6374239897, 0, 30deg);
  }
  15% {
    -webkit-transform: rotate3d(0.8090169944, 0.5877852523, 0, 30deg);
            transform: rotate3d(0.8090169944, 0.5877852523, 0, 30deg);
  }
  16% {
    -webkit-transform: rotate3d(0.8443279255, 0.535826795, 0, 30deg);
            transform: rotate3d(0.8443279255, 0.535826795, 0, 30deg);
  }
  17% {
    -webkit-transform: rotate3d(0.87630668, 0.4817536741, 0, 30deg);
            transform: rotate3d(0.87630668, 0.4817536741, 0, 30deg);
  }
  18% {
    -webkit-transform: rotate3d(0.9048270525, 0.4257792916, 0, 30deg);
            transform: rotate3d(0.9048270525, 0.4257792916, 0, 30deg);
  }
  19% {
    -webkit-transform: rotate3d(0.9297764859, 0.3681245527, 0, 30deg);
            transform: rotate3d(0.9297764859, 0.3681245527, 0, 30deg);
  }
  20% {
    -webkit-transform: rotate3d(0.9510565163, 0.3090169944, 0, 30deg);
            transform: rotate3d(0.9510565163, 0.3090169944, 0, 30deg);
  }
  21% {
    -webkit-transform: rotate3d(0.9685831611, 0.2486898872, 0, 30deg);
            transform: rotate3d(0.9685831611, 0.2486898872, 0, 30deg);
  }
  22% {
    -webkit-transform: rotate3d(0.9822872507, 0.1873813146, 0, 30deg);
            transform: rotate3d(0.9822872507, 0.1873813146, 0, 30deg);
  }
  23% {
    -webkit-transform: rotate3d(0.9921147013, 0.1253332336, 0, 30deg);
            transform: rotate3d(0.9921147013, 0.1253332336, 0, 30deg);
  }
  24% {
    -webkit-transform: rotate3d(0.9980267284, 0.0627905195, 0, 30deg);
            transform: rotate3d(0.9980267284, 0.0627905195, 0, 30deg);
  }
  25% {
    -webkit-transform: rotate3d(1, 0, 0, 30deg);
            transform: rotate3d(1, 0, 0, 30deg);
  }
  26% {
    -webkit-transform: rotate3d(0.9980267284, -0.0627905195, 0, 30deg);
            transform: rotate3d(0.9980267284, -0.0627905195, 0, 30deg);
  }
  27% {
    -webkit-transform: rotate3d(0.9921147013, -0.1253332336, 0, 30deg);
            transform: rotate3d(0.9921147013, -0.1253332336, 0, 30deg);
  }
  28% {
    -webkit-transform: rotate3d(0.9822872507, -0.1873813146, 0, 30deg);
            transform: rotate3d(0.9822872507, -0.1873813146, 0, 30deg);
  }
  29% {
    -webkit-transform: rotate3d(0.9685831611, -0.2486898872, 0, 30deg);
            transform: rotate3d(0.9685831611, -0.2486898872, 0, 30deg);
  }
  30% {
    -webkit-transform: rotate3d(0.9510565163, -0.3090169944, 0, 30deg);
            transform: rotate3d(0.9510565163, -0.3090169944, 0, 30deg);
  }
  31% {
    -webkit-transform: rotate3d(0.9297764859, -0.3681245527, 0, 30deg);
            transform: rotate3d(0.9297764859, -0.3681245527, 0, 30deg);
  }
  32% {
    -webkit-transform: rotate3d(0.9048270525, -0.4257792916, 0, 30deg);
            transform: rotate3d(0.9048270525, -0.4257792916, 0, 30deg);
  }
  33% {
    -webkit-transform: rotate3d(0.87630668, -0.4817536741, 0, 30deg);
            transform: rotate3d(0.87630668, -0.4817536741, 0, 30deg);
  }
  34% {
    -webkit-transform: rotate3d(0.8443279255, -0.535826795, 0, 30deg);
            transform: rotate3d(0.8443279255, -0.535826795, 0, 30deg);
  }
  35% {
    -webkit-transform: rotate3d(0.8090169944, -0.5877852523, 0, 30deg);
            transform: rotate3d(0.8090169944, -0.5877852523, 0, 30deg);
  }
  36% {
    -webkit-transform: rotate3d(0.7705132428, -0.6374239897, 0, 30deg);
            transform: rotate3d(0.7705132428, -0.6374239897, 0, 30deg);
  }
  37% {
    -webkit-transform: rotate3d(0.7289686274, -0.6845471059, 0, 30deg);
            transform: rotate3d(0.7289686274, -0.6845471059, 0, 30deg);
  }
  38% {
    -webkit-transform: rotate3d(0.6845471059, -0.7289686274, 0, 30deg);
            transform: rotate3d(0.6845471059, -0.7289686274, 0, 30deg);
  }
  39% {
    -webkit-transform: rotate3d(0.6374239897, -0.7705132428, 0, 30deg);
            transform: rotate3d(0.6374239897, -0.7705132428, 0, 30deg);
  }
  40% {
    -webkit-transform: rotate3d(0.5877852523, -0.8090169944, 0, 30deg);
            transform: rotate3d(0.5877852523, -0.8090169944, 0, 30deg);
  }
  41% {
    -webkit-transform: rotate3d(0.535826795, -0.8443279255, 0, 30deg);
            transform: rotate3d(0.535826795, -0.8443279255, 0, 30deg);
  }
  42% {
    -webkit-transform: rotate3d(0.4817536741, -0.87630668, 0, 30deg);
            transform: rotate3d(0.4817536741, -0.87630668, 0, 30deg);
  }
  43% {
    -webkit-transform: rotate3d(0.4257792916, -0.9048270525, 0, 30deg);
            transform: rotate3d(0.4257792916, -0.9048270525, 0, 30deg);
  }
  44% {
    -webkit-transform: rotate3d(0.3681245527, -0.9297764859, 0, 30deg);
            transform: rotate3d(0.3681245527, -0.9297764859, 0, 30deg);
  }
  45% {
    -webkit-transform: rotate3d(0.3090169944, -0.9510565163, 0, 30deg);
            transform: rotate3d(0.3090169944, -0.9510565163, 0, 30deg);
  }
  46% {
    -webkit-transform: rotate3d(0.2486898872, -0.9685831611, 0, 30deg);
            transform: rotate3d(0.2486898872, -0.9685831611, 0, 30deg);
  }
  47% {
    -webkit-transform: rotate3d(0.1873813146, -0.9822872507, 0, 30deg);
            transform: rotate3d(0.1873813146, -0.9822872507, 0, 30deg);
  }
  48% {
    -webkit-transform: rotate3d(0.1253332336, -0.9921147013, 0, 30deg);
            transform: rotate3d(0.1253332336, -0.9921147013, 0, 30deg);
  }
  49% {
    -webkit-transform: rotate3d(0.0627905195, -0.9980267284, 0, 30deg);
            transform: rotate3d(0.0627905195, -0.9980267284, 0, 30deg);
  }
  50% {
    -webkit-transform: rotate3d(0, -0.9999999999, 0, 30deg);
            transform: rotate3d(0, -0.9999999999, 0, 30deg);
  }
  51% {
    -webkit-transform: rotate3d(-0.0627905195, -0.9980267283, 0, 30deg);
            transform: rotate3d(-0.0627905195, -0.9980267283, 0, 30deg);
  }
  52% {
    -webkit-transform: rotate3d(-0.1253332335, -0.9921147011, 0, 30deg);
            transform: rotate3d(-0.1253332335, -0.9921147011, 0, 30deg);
  }
  53% {
    -webkit-transform: rotate3d(-0.1873813145, -0.9822872505, 0, 30deg);
            transform: rotate3d(-0.1873813145, -0.9822872505, 0, 30deg);
  }
  54% {
    -webkit-transform: rotate3d(-0.2486898871, -0.9685831607, 0, 30deg);
            transform: rotate3d(-0.2486898871, -0.9685831607, 0, 30deg);
  }
  55% {
    -webkit-transform: rotate3d(-0.3090169943, -0.9510565157, 0, 30deg);
            transform: rotate3d(-0.3090169943, -0.9510565157, 0, 30deg);
  }
  56% {
    -webkit-transform: rotate3d(-0.3681245525, -0.929776485, 0, 30deg);
            transform: rotate3d(-0.3681245525, -0.929776485, 0, 30deg);
  }
  57% {
    -webkit-transform: rotate3d(-0.4257792914, -0.9048270511, 0, 30deg);
            transform: rotate3d(-0.4257792914, -0.9048270511, 0, 30deg);
  }
  58% {
    -webkit-transform: rotate3d(-0.4817536738, -0.8763066781, 0, 30deg);
            transform: rotate3d(-0.4817536738, -0.8763066781, 0, 30deg);
  }
  59% {
    -webkit-transform: rotate3d(-0.5358267945, -0.8443279226, 0, 30deg);
            transform: rotate3d(-0.5358267945, -0.8443279226, 0, 30deg);
  }
  60% {
    -webkit-transform: rotate3d(-0.5877852516, -0.8090169902, 0, 30deg);
            transform: rotate3d(-0.5877852516, -0.8090169902, 0, 30deg);
  }
  61% {
    -webkit-transform: rotate3d(-0.6374239888, -0.7705132368, 0, 30deg);
            transform: rotate3d(-0.6374239888, -0.7705132368, 0, 30deg);
  }
  62% {
    -webkit-transform: rotate3d(-0.6845471045, -0.7289686189, 0, 30deg);
            transform: rotate3d(-0.6845471045, -0.7289686189, 0, 30deg);
  }
  63% {
    -webkit-transform: rotate3d(-0.7289686253, -0.6845470938, 0, 30deg);
            transform: rotate3d(-0.7289686253, -0.6845470938, 0, 30deg);
  }
  64% {
    -webkit-transform: rotate3d(-0.7705132398, -0.6374239727, 0, 30deg);
            transform: rotate3d(-0.7705132398, -0.6374239727, 0, 30deg);
  }
  65% {
    -webkit-transform: rotate3d(-0.8090169901, -0.5877852283, 0, 30deg);
            transform: rotate3d(-0.8090169901, -0.5877852283, 0, 30deg);
  }
  66% {
    -webkit-transform: rotate3d(-0.8443279194, -0.5358267614, 0, 30deg);
            transform: rotate3d(-0.8443279194, -0.5358267614, 0, 30deg);
  }
  67% {
    -webkit-transform: rotate3d(-0.8763066715, -0.4817536274, 0, 30deg);
            transform: rotate3d(-0.8763066715, -0.4817536274, 0, 30deg);
  }
  68% {
    -webkit-transform: rotate3d(-0.9048270404, -0.425779227, 0, 30deg);
            transform: rotate3d(-0.9048270404, -0.425779227, 0, 30deg);
  }
  69% {
    -webkit-transform: rotate3d(-0.9297764691, -0.3681244637, 0, 30deg);
            transform: rotate3d(-0.9297764691, -0.3681244637, 0, 30deg);
  }
  70% {
    -webkit-transform: rotate3d(-0.9510564929, -0.3090168724, 0, 30deg);
            transform: rotate3d(-0.9510564929, -0.3090168724, 0, 30deg);
  }
  71% {
    -webkit-transform: rotate3d(-0.9685831287, -0.2486897207, 0, 30deg);
            transform: rotate3d(-0.9685831287, -0.2486897207, 0, 30deg);
  }
  72% {
    -webkit-transform: rotate3d(-0.9822872061, -0.1873810883, 0, 30deg);
            transform: rotate3d(-0.9822872061, -0.1873810883, 0, 30deg);
  }
  73% {
    -webkit-transform: rotate3d(-0.9921146401, -0.1253329274, 0, 30deg);
            transform: rotate3d(-0.9921146401, -0.1253329274, 0, 30deg);
  }
  74% {
    -webkit-transform: rotate3d(-0.9980266448, -0.0627901069, 0, 30deg);
            transform: rotate3d(-0.9980266448, -0.0627901069, 0, 30deg);
  }
  75% {
    -webkit-transform: rotate3d(-0.9999998862, 0.0000005537, 0, 30deg);
            transform: rotate3d(-0.9999998862, 0.0000005537, 0, 30deg);
  }
  76% {
    -webkit-transform: rotate3d(-0.9980265742, 0.0627912598, 0, 30deg);
            transform: rotate3d(-0.9980265742, 0.0627912598, 0, 30deg);
  }
  77% {
    -webkit-transform: rotate3d(-0.9921144932, 0.1253342195, 0, 30deg);
            transform: rotate3d(-0.9921144932, 0.1253342195, 0, 30deg);
  }
  78% {
    -webkit-transform: rotate3d(-0.982286971, 0.1873826227, 0, 30deg);
            transform: rotate3d(-0.982286971, 0.1873826227, 0, 30deg);
  }
  79% {
    -webkit-transform: rotate3d(-0.9685827866, 0.2486916166, 0, 30deg);
            transform: rotate3d(-0.9685827866, 0.2486916166, 0, 30deg);
  }
  80% {
    -webkit-transform: rotate3d(-0.9510560166, 0.3090192726, 0, 30deg);
            transform: rotate3d(-0.9510560166, 0.3090192726, 0, 30deg);
  }
  81% {
    -webkit-transform: rotate3d(-0.9297758216, 0.3681275437, 0, 30deg);
            transform: rotate3d(-0.9297758216, 0.3681275437, 0, 30deg);
  }
  82% {
    -webkit-transform: rotate3d(-0.9048261725, 0.425783205, 0, 30deg);
            transform: rotate3d(-0.9048261725, 0.425783205, 0, 30deg);
  }
  83% {
    -webkit-transform: rotate3d(-0.8763055184, 0.4817587777, 0, 30deg);
            transform: rotate3d(-0.8763055184, 0.4817587777, 0, 30deg);
  }
  84% {
    -webkit-transform: rotate3d(-0.8443263971, 0.5358334293, 0, 30deg);
            transform: rotate3d(-0.8443263971, 0.5358334293, 0, 30deg);
  }
  85% {
    -webkit-transform: rotate3d(-0.80901499, 0.5877938496, 0, 30deg);
            transform: rotate3d(-0.80901499, 0.5877938496, 0, 30deg);
  }
  86% {
    -webkit-transform: rotate3d(-0.7705106226, 0.6374350969, 0, 30deg);
            transform: rotate3d(-0.7705106226, 0.6374350969, 0, 30deg);
  }
  87% {
    -webkit-transform: rotate3d(-0.7289652129, 0.6845614127, 0, 30deg);
            transform: rotate3d(-0.7289652129, 0.6845614127, 0, 30deg);
  }
  88% {
    -webkit-transform: rotate3d(-0.6845426698, 0.7289870018, 0, 30deg);
            transform: rotate3d(-0.6845426698, 0.7289870018, 0, 30deg);
  }
  89% {
    -webkit-transform: rotate3d(-0.6374182434, 0.7705367741, 0, 30deg);
            transform: rotate3d(-0.6374182434, 0.7705367741, 0, 30deg);
  }
  90% {
    -webkit-transform: rotate3d(-0.5877778306, 0.8090470459, 0, 30deg);
            transform: rotate3d(-0.5877778306, 0.8090470459, 0, 30deg);
  }
  91% {
    -webkit-transform: rotate3d(-0.5358172367, 0.8443661994, 0, 30deg);
            transform: rotate3d(-0.5358172367, 0.8443661994, 0, 30deg);
  }
  92% {
    -webkit-transform: rotate3d(-0.4817413984, 0.876355296, 0, 30deg);
            transform: rotate3d(-0.4817413984, 0.876355296, 0, 30deg);
  }
  93% {
    -webkit-transform: rotate3d(-0.4257635689, 0.904888644, 0, 30deg);
            transform: rotate3d(-0.4257635689, 0.904888644, 0, 30deg);
  }
  94% {
    -webkit-transform: rotate3d(-0.3681044689, 0.9298543169, 0, 30deg);
            transform: rotate3d(-0.3681044689, 0.9298543169, 0, 30deg);
  }
  95% {
    -webkit-transform: rotate3d(-0.3089914068, 0.9511546228, 0, 30deg);
            transform: rotate3d(-0.3089914068, 0.9511546228, 0, 30deg);
  }
  96% {
    -webkit-transform: rotate3d(-0.2486573708, 0.9687065223, 0, 30deg);
            transform: rotate3d(-0.2486573708, 0.9687065223, 0, 30deg);
  }
  97% {
    -webkit-transform: rotate3d(-0.1873400968, 0.9824419959, 0, 30deg);
            transform: rotate3d(-0.1873400968, 0.9824419959, 0, 30deg);
  }
  98% {
    -webkit-transform: rotate3d(-0.1252811139, 0.9923083591, 0, 30deg);
            transform: rotate3d(-0.1252811139, 0.9923083591, 0, 30deg);
  }
  99% {
    -webkit-transform: rotate3d(-0.062724773, 0.9982685263, 0, 30deg);
            transform: rotate3d(-0.062724773, 0.9982685263, 0, 30deg);
  }
  100% {
    -webkit-transform: rotate3d(0.000082741, 1.000301224, 0, 30deg);
            transform: rotate3d(0.000082741, 1.000301224, 0, 30deg);
  }
}

@keyframes float {
  0% {
    -webkit-transform: rotate3d(0, 1, 0, 30deg);
            transform: rotate3d(0, 1, 0, 30deg);
  }
  1% {
    -webkit-transform: rotate3d(0.0627905195, 0.9980267284, 0, 30deg);
            transform: rotate3d(0.0627905195, 0.9980267284, 0, 30deg);
  }
  2% {
    -webkit-transform: rotate3d(0.1253332336, 0.9921147013, 0, 30deg);
            transform: rotate3d(0.1253332336, 0.9921147013, 0, 30deg);
  }
  3% {
    -webkit-transform: rotate3d(0.1873813146, 0.9822872507, 0, 30deg);
            transform: rotate3d(0.1873813146, 0.9822872507, 0, 30deg);
  }
  4% {
    -webkit-transform: rotate3d(0.2486898872, 0.9685831611, 0, 30deg);
            transform: rotate3d(0.2486898872, 0.9685831611, 0, 30deg);
  }
  5% {
    -webkit-transform: rotate3d(0.3090169944, 0.9510565163, 0, 30deg);
            transform: rotate3d(0.3090169944, 0.9510565163, 0, 30deg);
  }
  6% {
    -webkit-transform: rotate3d(0.3681245527, 0.9297764859, 0, 30deg);
            transform: rotate3d(0.3681245527, 0.9297764859, 0, 30deg);
  }
  7% {
    -webkit-transform: rotate3d(0.4257792916, 0.9048270525, 0, 30deg);
            transform: rotate3d(0.4257792916, 0.9048270525, 0, 30deg);
  }
  8% {
    -webkit-transform: rotate3d(0.4817536741, 0.87630668, 0, 30deg);
            transform: rotate3d(0.4817536741, 0.87630668, 0, 30deg);
  }
  9% {
    -webkit-transform: rotate3d(0.535826795, 0.8443279255, 0, 30deg);
            transform: rotate3d(0.535826795, 0.8443279255, 0, 30deg);
  }
  10% {
    -webkit-transform: rotate3d(0.5877852523, 0.8090169944, 0, 30deg);
            transform: rotate3d(0.5877852523, 0.8090169944, 0, 30deg);
  }
  11% {
    -webkit-transform: rotate3d(0.6374239897, 0.7705132428, 0, 30deg);
            transform: rotate3d(0.6374239897, 0.7705132428, 0, 30deg);
  }
  12% {
    -webkit-transform: rotate3d(0.6845471059, 0.7289686274, 0, 30deg);
            transform: rotate3d(0.6845471059, 0.7289686274, 0, 30deg);
  }
  13% {
    -webkit-transform: rotate3d(0.7289686274, 0.6845471059, 0, 30deg);
            transform: rotate3d(0.7289686274, 0.6845471059, 0, 30deg);
  }
  14% {
    -webkit-transform: rotate3d(0.7705132428, 0.6374239897, 0, 30deg);
            transform: rotate3d(0.7705132428, 0.6374239897, 0, 30deg);
  }
  15% {
    -webkit-transform: rotate3d(0.8090169944, 0.5877852523, 0, 30deg);
            transform: rotate3d(0.8090169944, 0.5877852523, 0, 30deg);
  }
  16% {
    -webkit-transform: rotate3d(0.8443279255, 0.535826795, 0, 30deg);
            transform: rotate3d(0.8443279255, 0.535826795, 0, 30deg);
  }
  17% {
    -webkit-transform: rotate3d(0.87630668, 0.4817536741, 0, 30deg);
            transform: rotate3d(0.87630668, 0.4817536741, 0, 30deg);
  }
  18% {
    -webkit-transform: rotate3d(0.9048270525, 0.4257792916, 0, 30deg);
            transform: rotate3d(0.9048270525, 0.4257792916, 0, 30deg);
  }
  19% {
    -webkit-transform: rotate3d(0.9297764859, 0.3681245527, 0, 30deg);
            transform: rotate3d(0.9297764859, 0.3681245527, 0, 30deg);
  }
  20% {
    -webkit-transform: rotate3d(0.9510565163, 0.3090169944, 0, 30deg);
            transform: rotate3d(0.9510565163, 0.3090169944, 0, 30deg);
  }
  21% {
    -webkit-transform: rotate3d(0.9685831611, 0.2486898872, 0, 30deg);
            transform: rotate3d(0.9685831611, 0.2486898872, 0, 30deg);
  }
  22% {
    -webkit-transform: rotate3d(0.9822872507, 0.1873813146, 0, 30deg);
            transform: rotate3d(0.9822872507, 0.1873813146, 0, 30deg);
  }
  23% {
    -webkit-transform: rotate3d(0.9921147013, 0.1253332336, 0, 30deg);
            transform: rotate3d(0.9921147013, 0.1253332336, 0, 30deg);
  }
  24% {
    -webkit-transform: rotate3d(0.9980267284, 0.0627905195, 0, 30deg);
            transform: rotate3d(0.9980267284, 0.0627905195, 0, 30deg);
  }
  25% {
    -webkit-transform: rotate3d(1, 0, 0, 30deg);
            transform: rotate3d(1, 0, 0, 30deg);
  }
  26% {
    -webkit-transform: rotate3d(0.9980267284, -0.0627905195, 0, 30deg);
            transform: rotate3d(0.9980267284, -0.0627905195, 0, 30deg);
  }
  27% {
    -webkit-transform: rotate3d(0.9921147013, -0.1253332336, 0, 30deg);
            transform: rotate3d(0.9921147013, -0.1253332336, 0, 30deg);
  }
  28% {
    -webkit-transform: rotate3d(0.9822872507, -0.1873813146, 0, 30deg);
            transform: rotate3d(0.9822872507, -0.1873813146, 0, 30deg);
  }
  29% {
    -webkit-transform: rotate3d(0.9685831611, -0.2486898872, 0, 30deg);
            transform: rotate3d(0.9685831611, -0.2486898872, 0, 30deg);
  }
  30% {
    -webkit-transform: rotate3d(0.9510565163, -0.3090169944, 0, 30deg);
            transform: rotate3d(0.9510565163, -0.3090169944, 0, 30deg);
  }
  31% {
    -webkit-transform: rotate3d(0.9297764859, -0.3681245527, 0, 30deg);
            transform: rotate3d(0.9297764859, -0.3681245527, 0, 30deg);
  }
  32% {
    -webkit-transform: rotate3d(0.9048270525, -0.4257792916, 0, 30deg);
            transform: rotate3d(0.9048270525, -0.4257792916, 0, 30deg);
  }
  33% {
    -webkit-transform: rotate3d(0.87630668, -0.4817536741, 0, 30deg);
            transform: rotate3d(0.87630668, -0.4817536741, 0, 30deg);
  }
  34% {
    -webkit-transform: rotate3d(0.8443279255, -0.535826795, 0, 30deg);
            transform: rotate3d(0.8443279255, -0.535826795, 0, 30deg);
  }
  35% {
    -webkit-transform: rotate3d(0.8090169944, -0.5877852523, 0, 30deg);
            transform: rotate3d(0.8090169944, -0.5877852523, 0, 30deg);
  }
  36% {
    -webkit-transform: rotate3d(0.7705132428, -0.6374239897, 0, 30deg);
            transform: rotate3d(0.7705132428, -0.6374239897, 0, 30deg);
  }
  37% {
    -webkit-transform: rotate3d(0.7289686274, -0.6845471059, 0, 30deg);
            transform: rotate3d(0.7289686274, -0.6845471059, 0, 30deg);
  }
  38% {
    -webkit-transform: rotate3d(0.6845471059, -0.7289686274, 0, 30deg);
            transform: rotate3d(0.6845471059, -0.7289686274, 0, 30deg);
  }
  39% {
    -webkit-transform: rotate3d(0.6374239897, -0.7705132428, 0, 30deg);
            transform: rotate3d(0.6374239897, -0.7705132428, 0, 30deg);
  }
  40% {
    -webkit-transform: rotate3d(0.5877852523, -0.8090169944, 0, 30deg);
            transform: rotate3d(0.5877852523, -0.8090169944, 0, 30deg);
  }
  41% {
    -webkit-transform: rotate3d(0.535826795, -0.8443279255, 0, 30deg);
            transform: rotate3d(0.535826795, -0.8443279255, 0, 30deg);
  }
  42% {
    -webkit-transform: rotate3d(0.4817536741, -0.87630668, 0, 30deg);
            transform: rotate3d(0.4817536741, -0.87630668, 0, 30deg);
  }
  43% {
    -webkit-transform: rotate3d(0.4257792916, -0.9048270525, 0, 30deg);
            transform: rotate3d(0.4257792916, -0.9048270525, 0, 30deg);
  }
  44% {
    -webkit-transform: rotate3d(0.3681245527, -0.9297764859, 0, 30deg);
            transform: rotate3d(0.3681245527, -0.9297764859, 0, 30deg);
  }
  45% {
    -webkit-transform: rotate3d(0.3090169944, -0.9510565163, 0, 30deg);
            transform: rotate3d(0.3090169944, -0.9510565163, 0, 30deg);
  }
  46% {
    -webkit-transform: rotate3d(0.2486898872, -0.9685831611, 0, 30deg);
            transform: rotate3d(0.2486898872, -0.9685831611, 0, 30deg);
  }
  47% {
    -webkit-transform: rotate3d(0.1873813146, -0.9822872507, 0, 30deg);
            transform: rotate3d(0.1873813146, -0.9822872507, 0, 30deg);
  }
  48% {
    -webkit-transform: rotate3d(0.1253332336, -0.9921147013, 0, 30deg);
            transform: rotate3d(0.1253332336, -0.9921147013, 0, 30deg);
  }
  49% {
    -webkit-transform: rotate3d(0.0627905195, -0.9980267284, 0, 30deg);
            transform: rotate3d(0.0627905195, -0.9980267284, 0, 30deg);
  }
  50% {
    -webkit-transform: rotate3d(0, -0.9999999999, 0, 30deg);
            transform: rotate3d(0, -0.9999999999, 0, 30deg);
  }
  51% {
    -webkit-transform: rotate3d(-0.0627905195, -0.9980267283, 0, 30deg);
            transform: rotate3d(-0.0627905195, -0.9980267283, 0, 30deg);
  }
  52% {
    -webkit-transform: rotate3d(-0.1253332335, -0.9921147011, 0, 30deg);
            transform: rotate3d(-0.1253332335, -0.9921147011, 0, 30deg);
  }
  53% {
    -webkit-transform: rotate3d(-0.1873813145, -0.9822872505, 0, 30deg);
            transform: rotate3d(-0.1873813145, -0.9822872505, 0, 30deg);
  }
  54% {
    -webkit-transform: rotate3d(-0.2486898871, -0.9685831607, 0, 30deg);
            transform: rotate3d(-0.2486898871, -0.9685831607, 0, 30deg);
  }
  55% {
    -webkit-transform: rotate3d(-0.3090169943, -0.9510565157, 0, 30deg);
            transform: rotate3d(-0.3090169943, -0.9510565157, 0, 30deg);
  }
  56% {
    -webkit-transform: rotate3d(-0.3681245525, -0.929776485, 0, 30deg);
            transform: rotate3d(-0.3681245525, -0.929776485, 0, 30deg);
  }
  57% {
    -webkit-transform: rotate3d(-0.4257792914, -0.9048270511, 0, 30deg);
            transform: rotate3d(-0.4257792914, -0.9048270511, 0, 30deg);
  }
  58% {
    -webkit-transform: rotate3d(-0.4817536738, -0.8763066781, 0, 30deg);
            transform: rotate3d(-0.4817536738, -0.8763066781, 0, 30deg);
  }
  59% {
    -webkit-transform: rotate3d(-0.5358267945, -0.8443279226, 0, 30deg);
            transform: rotate3d(-0.5358267945, -0.8443279226, 0, 30deg);
  }
  60% {
    -webkit-transform: rotate3d(-0.5877852516, -0.8090169902, 0, 30deg);
            transform: rotate3d(-0.5877852516, -0.8090169902, 0, 30deg);
  }
  61% {
    -webkit-transform: rotate3d(-0.6374239888, -0.7705132368, 0, 30deg);
            transform: rotate3d(-0.6374239888, -0.7705132368, 0, 30deg);
  }
  62% {
    -webkit-transform: rotate3d(-0.6845471045, -0.7289686189, 0, 30deg);
            transform: rotate3d(-0.6845471045, -0.7289686189, 0, 30deg);
  }
  63% {
    -webkit-transform: rotate3d(-0.7289686253, -0.6845470938, 0, 30deg);
            transform: rotate3d(-0.7289686253, -0.6845470938, 0, 30deg);
  }
  64% {
    -webkit-transform: rotate3d(-0.7705132398, -0.6374239727, 0, 30deg);
            transform: rotate3d(-0.7705132398, -0.6374239727, 0, 30deg);
  }
  65% {
    -webkit-transform: rotate3d(-0.8090169901, -0.5877852283, 0, 30deg);
            transform: rotate3d(-0.8090169901, -0.5877852283, 0, 30deg);
  }
  66% {
    -webkit-transform: rotate3d(-0.8443279194, -0.5358267614, 0, 30deg);
            transform: rotate3d(-0.8443279194, -0.5358267614, 0, 30deg);
  }
  67% {
    -webkit-transform: rotate3d(-0.8763066715, -0.4817536274, 0, 30deg);
            transform: rotate3d(-0.8763066715, -0.4817536274, 0, 30deg);
  }
  68% {
    -webkit-transform: rotate3d(-0.9048270404, -0.425779227, 0, 30deg);
            transform: rotate3d(-0.9048270404, -0.425779227, 0, 30deg);
  }
  69% {
    -webkit-transform: rotate3d(-0.9297764691, -0.3681244637, 0, 30deg);
            transform: rotate3d(-0.9297764691, -0.3681244637, 0, 30deg);
  }
  70% {
    -webkit-transform: rotate3d(-0.9510564929, -0.3090168724, 0, 30deg);
            transform: rotate3d(-0.9510564929, -0.3090168724, 0, 30deg);
  }
  71% {
    -webkit-transform: rotate3d(-0.9685831287, -0.2486897207, 0, 30deg);
            transform: rotate3d(-0.9685831287, -0.2486897207, 0, 30deg);
  }
  72% {
    -webkit-transform: rotate3d(-0.9822872061, -0.1873810883, 0, 30deg);
            transform: rotate3d(-0.9822872061, -0.1873810883, 0, 30deg);
  }
  73% {
    -webkit-transform: rotate3d(-0.9921146401, -0.1253329274, 0, 30deg);
            transform: rotate3d(-0.9921146401, -0.1253329274, 0, 30deg);
  }
  74% {
    -webkit-transform: rotate3d(-0.9980266448, -0.0627901069, 0, 30deg);
            transform: rotate3d(-0.9980266448, -0.0627901069, 0, 30deg);
  }
  75% {
    -webkit-transform: rotate3d(-0.9999998862, 0.0000005537, 0, 30deg);
            transform: rotate3d(-0.9999998862, 0.0000005537, 0, 30deg);
  }
  76% {
    -webkit-transform: rotate3d(-0.9980265742, 0.0627912598, 0, 30deg);
            transform: rotate3d(-0.9980265742, 0.0627912598, 0, 30deg);
  }
  77% {
    -webkit-transform: rotate3d(-0.9921144932, 0.1253342195, 0, 30deg);
            transform: rotate3d(-0.9921144932, 0.1253342195, 0, 30deg);
  }
  78% {
    -webkit-transform: rotate3d(-0.982286971, 0.1873826227, 0, 30deg);
            transform: rotate3d(-0.982286971, 0.1873826227, 0, 30deg);
  }
  79% {
    -webkit-transform: rotate3d(-0.9685827866, 0.2486916166, 0, 30deg);
            transform: rotate3d(-0.9685827866, 0.2486916166, 0, 30deg);
  }
  80% {
    -webkit-transform: rotate3d(-0.9510560166, 0.3090192726, 0, 30deg);
            transform: rotate3d(-0.9510560166, 0.3090192726, 0, 30deg);
  }
  81% {
    -webkit-transform: rotate3d(-0.9297758216, 0.3681275437, 0, 30deg);
            transform: rotate3d(-0.9297758216, 0.3681275437, 0, 30deg);
  }
  82% {
    -webkit-transform: rotate3d(-0.9048261725, 0.425783205, 0, 30deg);
            transform: rotate3d(-0.9048261725, 0.425783205, 0, 30deg);
  }
  83% {
    -webkit-transform: rotate3d(-0.8763055184, 0.4817587777, 0, 30deg);
            transform: rotate3d(-0.8763055184, 0.4817587777, 0, 30deg);
  }
  84% {
    -webkit-transform: rotate3d(-0.8443263971, 0.5358334293, 0, 30deg);
            transform: rotate3d(-0.8443263971, 0.5358334293, 0, 30deg);
  }
  85% {
    -webkit-transform: rotate3d(-0.80901499, 0.5877938496, 0, 30deg);
            transform: rotate3d(-0.80901499, 0.5877938496, 0, 30deg);
  }
  86% {
    -webkit-transform: rotate3d(-0.7705106226, 0.6374350969, 0, 30deg);
            transform: rotate3d(-0.7705106226, 0.6374350969, 0, 30deg);
  }
  87% {
    -webkit-transform: rotate3d(-0.7289652129, 0.6845614127, 0, 30deg);
            transform: rotate3d(-0.7289652129, 0.6845614127, 0, 30deg);
  }
  88% {
    -webkit-transform: rotate3d(-0.6845426698, 0.7289870018, 0, 30deg);
            transform: rotate3d(-0.6845426698, 0.7289870018, 0, 30deg);
  }
  89% {
    -webkit-transform: rotate3d(-0.6374182434, 0.7705367741, 0, 30deg);
            transform: rotate3d(-0.6374182434, 0.7705367741, 0, 30deg);
  }
  90% {
    -webkit-transform: rotate3d(-0.5877778306, 0.8090470459, 0, 30deg);
            transform: rotate3d(-0.5877778306, 0.8090470459, 0, 30deg);
  }
  91% {
    -webkit-transform: rotate3d(-0.5358172367, 0.8443661994, 0, 30deg);
            transform: rotate3d(-0.5358172367, 0.8443661994, 0, 30deg);
  }
  92% {
    -webkit-transform: rotate3d(-0.4817413984, 0.876355296, 0, 30deg);
            transform: rotate3d(-0.4817413984, 0.876355296, 0, 30deg);
  }
  93% {
    -webkit-transform: rotate3d(-0.4257635689, 0.904888644, 0, 30deg);
            transform: rotate3d(-0.4257635689, 0.904888644, 0, 30deg);
  }
  94% {
    -webkit-transform: rotate3d(-0.3681044689, 0.9298543169, 0, 30deg);
            transform: rotate3d(-0.3681044689, 0.9298543169, 0, 30deg);
  }
  95% {
    -webkit-transform: rotate3d(-0.3089914068, 0.9511546228, 0, 30deg);
            transform: rotate3d(-0.3089914068, 0.9511546228, 0, 30deg);
  }
  96% {
    -webkit-transform: rotate3d(-0.2486573708, 0.9687065223, 0, 30deg);
            transform: rotate3d(-0.2486573708, 0.9687065223, 0, 30deg);
  }
  97% {
    -webkit-transform: rotate3d(-0.1873400968, 0.9824419959, 0, 30deg);
            transform: rotate3d(-0.1873400968, 0.9824419959, 0, 30deg);
  }
  98% {
    -webkit-transform: rotate3d(-0.1252811139, 0.9923083591, 0, 30deg);
            transform: rotate3d(-0.1252811139, 0.9923083591, 0, 30deg);
  }
  99% {
    -webkit-transform: rotate3d(-0.062724773, 0.9982685263, 0, 30deg);
            transform: rotate3d(-0.062724773, 0.9982685263, 0, 30deg);
  }
  100% {
    -webkit-transform: rotate3d(0.000082741, 1.000301224, 0, 30deg);
            transform: rotate3d(0.000082741, 1.000301224, 0, 30deg);
  }

`;

const Text = styled.div`
  display: inline-block;
  position: relative;
  font-size: 48vmin;
  color: transparent;
  transform-origin: center center;
  transform-style: preserve-3d;
  animation: ${float} 4s infinite;
`;

const InnerText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  text-shadow: 0 0 1px white;

  &:not(:nth-child(n + 3)) {
    color: #ed5565;
    text-shadow: 0 0 1px #ed5565;
  }
`;

const HeaderText = () => {
  return (
    <div className="App">
      <Text>
        <div>
          M<InnerText>M</InnerText>
          <InnerText>M</InnerText>
          <InnerText>M</InnerText>
          <InnerText>M</InnerText>
          <InnerText>M</InnerText>
          <InnerText>M</InnerText>
          <InnerText>M</InnerText>
          <InnerText>M</InnerText>
          <InnerText>M</InnerText>
          <InnerText>M</InnerText>
        </div>
        <div>
          o<InnerText>o</InnerText>
          <InnerText>o</InnerText>
          <InnerText>o</InnerText>
          <InnerText>o</InnerText>
          <InnerText>o</InnerText>
          <InnerText>o</InnerText>
          <InnerText>o</InnerText>
          <InnerText>o</InnerText>
          <InnerText>o</InnerText>
          <InnerText>o</InnerText>
        </div>
        <div>
          ë<InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
          <InnerText>ë</InnerText>
        </div>
      </Text>
    </div>
  );
};

export default HeaderText;
