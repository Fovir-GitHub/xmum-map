/**
 * @file Announcement.jsx
 * @description Component of displaying announcements on the top of page.
 * @author Fovir
 * @since 2025-09-17
 */

"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { useState } from "react";
import { catppuccinMochaColors } from "../../styles/materialUiTheme";
import xmumConfig from "../../config";
import GlobalEscListener from "../GlobalEscListener/GlobalEscListener";
import DetailPage from "../DetailPage/DetailPage";

/**
 * @typedef {object} AnnouncementProps
 * @property {string} locale Website locale from `useState()` function.
 * @property {string} slug Slug of announcement.
 */

/**
 * Component of displaying announcements on the top of web page.
 *
 * This component requires a slug to determine which markdown file is the content of announcement.
 *
 * @param {AnnouncementProps} props
 */
export default function Announcement(props) {
  const { locale, slug } = props;
  const [expanded, setExpanded] = useState(false);

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
          sx={{
            maxHeight: "40vh",
            overflowY: "auto",
          }}
        >
          <DetailPage slug={slug} locale={locale} />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
