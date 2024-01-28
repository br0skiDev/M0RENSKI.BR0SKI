"use client";
import React from "react";
import Link from "next/link";

import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Button, Divider } from "@mui/material";

import { easeIn, motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[200px] flex flex-col items-center">

          <div className="mb-[-20px]">
            <h1 className="text-white heading-font font-extrabold md:text-[54px] text-[50px] h-fit">
              CODE LIKE A PRO
            </h1>
          </div>

        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
        <div className="">
          <h2 className="text-white heading-font font-extrabold md:text-[31px] text-[28px]">
            with the M0RENSKI Library
          </h2>
        </div>
        </motion.div>
      </div>

      <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
      <div className="text-white/80 md:text-[13px] text-[9px] font-thin heading-font mt-[5px]">
        <p>
          Morenski is a React Library designed for those who want to master the
          skills of professional coding.
        </p>
      </div>
      </motion.div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="mt-[92px] text-white flex space-x-6">
          <Link href={"/docs"}>
            <div className="flex justify-center space-x-3 bg-mainblue/10 py-2 w-[140px] font-bold rounded hover:rounded-xl hover:bg-mainblue/20">
              <ArticleIcon />
              <h1>DOCS</h1>
            </div>
          </Link>
          <Link href={"/about"}>
            <div className="flex justify-center space-x-3 bg-mainblue/10 py-2 w-[140px] font-bold rounded hover:rounded-xl hover:bg-mainblue/20">
              <LocalOfferIcon />
              <h1>PRICING</h1>
            </div>
          </Link>
        </div>
      </motion.div>

      <div className="mt-[50px] w-full">
        <Divider>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: easeIn }} >
            <Button
              className="text-xl font-bold bg-mainblue text-white py-1 w-[140px] rounded-full hover:rounded-none"
              href={"/about"}
              variant="outlined"
              startIcon={<PlayCircleOutlineIcon />}
            >
              START
            </Button>
          </motion.div>
        </Divider>
      </div>
    </div>
  );
};

export default HeroContent;
