// img
import img1 from './assets/images/dmm.png';
import img2 from './assets/images/adc.png';
import img3 from './assets/images/vr driving.jpeg';
import img4 from './assets/images/optical theremin.png';
import img5 from './assets/images/adc circuit.png';
import img6 from './assets/images/hydrophobic aircraft.png';
import img7 from './assets/images/downhole hydraulic.png';
import img8 from './assets/images/drum-machine.png';
import img9 from './assets/images/random-quote-generator.png';
import img12 from './assets/images/new heim.png';

// pdf
import pdf1 from './assets/pdf/Instruction Set-DMM.pdf';
import pdf2 from './assets/pdf/Technical Description-ADC.pdf';
import pdf3 from './assets/pdf/Increasing Vehicular Accident Preparedness with Virtual Reality.pdf';
import pdf4 from './assets/pdf/Optical Theremin.pdf';
import pdf5 from './assets/pdf/Embedded Systems-Analog to Digital Converter.pdf';
import pdf6 from './assets/pdf/Hydrophobic aircraft paint to reduce the need for deicing fluid.pdf .pdf';
import pdf7 from './assets/pdf/Downhole Electro-Hydraulic Control System.pdf';

export default [
  {
    id: 1,
    image: img1,
    title: 'How to Measure a Voltage Using a Digital Multimeter',
    category: 'Writing Samples',
    description:
      'A digital multimeter is a testing tool that measures ​voltage​, ​current​, and ​resistance values. It is an indispensable diagnostic tool for electrical technicians. When a problem occurs in the circuit, the first thing that the technicians would do is to use digital multimeters to check whether the components are properly supplied with a voltage.',
    href: null,
    pdf: pdf1,
  },
  {
    id: 2,
    image: img2,
    title: 'How Digital Devices Understand Real-World Signals',
    category: 'Writing Samples',
    description:
      'In the modern world, we are dependent on digital devices; however, real-world signals (such as voice, audio, video, temperature, and pressure) are usually analog. Digital devices only understand and compute in 1 and 0’s; therefore, the analog-to-digital converters are important components in order to convert the signals to 1 and 0’s.',
    href: null,
    pdf: pdf2,
  },
  {
    id: 3,
    image: img3,
    title: 'Increasing Vehicular Accident Preparedness with Virtual Reality',
    category: 'Writing Samples',
    description:
      'New drivers, particularly teenagers, would be more likely to survive fatal car accident scenarios if their reactions to dangerous on-road experiences had been practiced in a low-stakes environment before encountering them in real life. Utilizing video game and virtual reality technologies in simulations of fatal events will enable them to commit reactions to muscle memory.',
    href: null,
    pdf: pdf3,
  },
  {
    id: 4,
    image: img4,
    title: 'Optical Theremin',
    category: 'Electrical Engineering',
    description:
      'Optical Theremins are musical devices that are operated without being touched by themusician. Team 5.0 built an Optical Theremin that implements auto-tune and equalizer functions. The device is a fascinating novelty that outputs a sound with controllable amplitude and frequency using an ambient light from the environment.',
    href: null,
    pdf: pdf4,
  },
  {
    id: 5,
    image: img5,
    title: 'Embedded Systems - Analog to Digital Converter',
    category: 'Electrical Engineering',
    description:
      'Electrical Engineers are interested in transfer functions that dictate the input/output relationshipof electrical systems. Team Wheelers designed and implemented an Analog to Digital Converter as part of alarger system to determine the unknown transfer function of the black box.',
    href: null,
    pdf: pdf5,
  },
  {
    id: 6,
    image: img6,
    title: 'Hydrophobic Aircraft Paint to Reduce the Need for Deicing Fluid',
    category: 'Writing Samples',
    description:
      'The environmental impacts of chemical aircraft deicing are often overlooked. Our goal was to decrease the annual volume of runoff deicing fluid for an aircraft. We considered improved means of complying with deicing requirements as well as improved containment and cleanup procedures.',
    href: null,
    pdf: pdf6,
  },

  {
    id: 7,
    image: img7,
    title: 'Downhole Electro-Hydraulic Control System',
    category: 'Electrical Engineering',
    description:
      'Our goal for this project was to build and design electro-hydraulic control systems. With this control system, a user can actuate a hydraulic tool and receive feedback from pressure sensors. The control system will contain a user interface, control electronics, a brushless DC motor, hydraulic pump and a hydraulic reservoir.',
    href:
      'https://sites.psu.edu/lfshowcasesp20/2020/04/29/schlumberger-5-downhole-electro-hydraulic-control-system',
    pdf: pdf7,
    misc: 'sponsored by Schlumberger',
  },
  {
    id: 8,
    image: img8,
    title: 'Drum Machine',
    category: 'Web Development',
    description: '',
    href: 'https://jongwooha98.github.io/drum-machine',
    pdf: null,
  },
  {
    id: 9,
    image: img9,
    title: 'Random Quote Generator',
    category: 'Web Development',
    description: '',
    href: 'https://jongwooha98.github.io/random-quote-generator',
    pdf: null,
  },
  {
    id: 10,
    image: null,
    title: 'Tic Tac Toe',
    category: 'Web Development',
    description: '',
    href: 'https://jongwooha98.github.io/tic-tac-toe',
    pdf: null,
  },
  {
    id: 11,
    image: null,
    title: 'Pomodoro Timer',
    category: 'Web Development',
    description: '',
    href: null,
    pdf: null,
  },
  {
    id: 12,
    image: img12,
    title: 'New Heim Project',
    category: 'Web Development',
    description: '',
    href: 'https://jongwooha98.github.io/new-heim',
    pdf: null,
  },
];
