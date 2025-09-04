/**
 * @file Announcement.jsx
 * @description Component of displaying announcements.
 * @author Fovir
 * @date 2025-09-03
 */

"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { getPostHtml } from "../../lib/getPostHtml";
import { useEffect, useState } from "react";

export default function Announcement({ locale }) {
  const [announcementContent, setAnnouncementContent] = useState("");

  useEffect(() => {
    getPostHtml("announcement", locale).then((html) => {
      setAnnouncementContent(html);
    });
  }, [locale]);

  const accordionTitle = {
    zh: "公告",
    en: "Announcement",
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
          {accordionTitle[locale]}
        </AccordionSummary>
        <AccordionDetails
          dangerouslySetInnerHTML={{ __html: announcementContent }}
        ></AccordionDetails>
      </Accordion>
    </div>
  );
}
