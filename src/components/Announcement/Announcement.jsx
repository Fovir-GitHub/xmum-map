/**
 * @file Announcement.jsx
 * @description Component of displaying announcements.
 * @author Fovir
 * @date 2025-09-05
 */

"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { useEffect, useState } from "react";
import { getMarkdownHtml } from "../../lib/getMarkdownHtml";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import xmumConfig from "../../config";

export default function Announcement({ locale }) {
  const [announcementContent, setAnnouncementContent] = useState("");

  useEffect(() => {
    getMarkdownHtml("announcement", locale).then((html) => {
      setAnnouncementContent(html);
    });
  }, [locale]);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          sx={{
            color: catppuccinMochaColors.red,
            fontWeight: "bolder",
            fontSize: "1.6rem",
          }}
        >
          {xmumConfig.announcement.title[locale]}
        </AccordionSummary>
        <AccordionDetails
          dangerouslySetInnerHTML={{ __html: announcementContent }}
          className="markdown"
        ></AccordionDetails>
      </Accordion>
    </div>
  );
}
