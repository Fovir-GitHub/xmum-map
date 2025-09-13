/**
 * @file Announcement.jsx
 * @description Component of displaying announcements.
 * @author Fovir
 * @date 2025-09-13
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
import GlobalEscListener from "../GlobalEscListener/GlobalEscListener";

export default function Announcement({ locale }) {
  const [announcementContent, setAnnouncementContent] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    getMarkdownHtml("announcement", locale).then((result) => {
      setAnnouncementContent(result.html);
    });
  }, [locale]);

  return (
    <>
      <GlobalEscListener onEsc={() => setExpanded(false)} />
      <Accordion
        sx={{ width: "100%" }}
        expanded={expanded}
        onChange={(_, isExpanded) => setExpanded(isExpanded)}
      >
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
          sx={{
            maxHeight: "40vh",
            overflowY: "auto",
          }}
        ></AccordionDetails>
      </Accordion>
    </>
  );
}
