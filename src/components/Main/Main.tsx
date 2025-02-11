import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: 1 },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: false },
              onHover: { enable: false },
              resize: true
            }
          },
          particles: {
            color: { value: "#ffffff" },
            move: { enable: true, speed: 0.5, outMode: "out" },
            number: {
              density: { enable: true, area: 2000 },
              value: 30
            },
            opacity: { value: 0.5 },
            shape: {
              type: "character",
              character: {
                value: [
                  "和",
                  "食",
                  "美",
                  "寿司",
                  "味",
                  "楽",
                  "夢",
                  "心",
                  "友",
                  "敬",
                  "温",
                  "情",
                  "幸"
                ],
                font: "monospace",
                style: "",
                weight: "400"
              }
            },
            size: {
              value: 24,
              random: true,
              animation: { enable: false }
            }
          },
          background: {
            color: "#0a0a0a",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
      <Hero />
      <About />
      <Project />
      <Contact />
    </Container>
  );
}
