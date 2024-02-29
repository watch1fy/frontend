/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card, CardBody, CardHeader, ScrollShadow } from "@nextui-org/react";

function About() {
  return (
    <Card className="md:p-2 flex">
      <CardHeader>
        <p className="text-xl md:text-3xl flex flex-row justify-end items-end">
          What is watch<span className="text-primary-500 font-semibold">i</span>
          fy?
        </p>
      </CardHeader>
      <CardBody className="hidden md:flex">
        &emsp;&emsp;&emsp;Welcome to Watchify, where we redefine the art of
        shared viewing experiences. Our platform is built on the foundation of
        seamless synchronization, allowing you to enjoy movies, series, and
        videos with a single partner in real-time, regardless of geographical
        barriers. With our playback controls, both users can collaboratively
        manage the viewing session, from play and pause to queuing up the next
        video.
        <br />
        <br />
        &emsp;&emsp;&emsp;But Watchify isn't just about watching content
        together; it's about enhancing your interaction. Engage in lively
        discussions via integrated video and text chat features, share real-time
        reactions with emojis, and track your partner's activities with live
        presence indicators. Whether it's bonding with friends, spending quality
        time with loved ones, or connecting with new acquaintances, Watchify
        transforms passive viewing into an immersive, shared experience that
        strengthens relationships and creates lasting memories.
      </CardBody>
      <CardBody className="md:hidden">
        <ScrollShadow className="h-[200px]">
          &emsp;&emsp;&emsp;Welcome to Watchify, where we revolutionize shared
          viewing. Enjoy movies, series, and videos with a partner in real-time,
          regardless of distance. Collaborate on playback controls and engage in
          lively discussions with integrated text and video chat features.
          <br />
          <br />
          &emsp;&emsp;&emsp;Enhance interaction with real-time reactions and
          live presence indicators. Whether bonding with friends, spending
          quality time with loved ones, or connecting with new acquaintances,
          Watchify transforms passive viewing into immersive, shared
          experiences.
        </ScrollShadow>
      </CardBody>
      <div id="feature-anchor" className="hidden"></div>
    </Card>
  );
}

export default About;
