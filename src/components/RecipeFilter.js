import React from "react";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleUrlString } from "../utils/urlString";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from "@mui/icons-material/FilterList";

import {
  Accordion,
  AccordionSummary,
  AccordionActions,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { accordionNames, filterAccordionIcons } from "../utils/constants";

const RecipeFilter = () => {
  const applyRef = useRef(null);
  const [queryObj, setQueryObj] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const accordionArray = Object.entries(accordionNames);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      if (event.key === "Enter" && isFocused) {
        applyRef.current.click();
      }
    };

    if (isFocused) {
      window.addEventListener("keydown", handleEnterKeyPress);
    } else {
      window.removeEventListener("keydown", handleEnterKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [isFocused]);

  const handlePanelExpand = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleToggleChange = (event, newValue, key) => {
    setQueryObj({ ...queryObj, [key]: newValue });
  };

  const handleApplyFilters = () => {
    navigate(`/recipes?${handleUrlString(queryObj)}`);
    setExpanded(false);
  };

  const handleClearFilters = () => {
    setQueryObj({});
    setExpanded(false);
  };

  const handleQueryInput = (event) => {
    setQueryObj({ ...queryObj, q: event.target.value });
  };

  return (
    <Box
      sx={{
        color: (theme) => theme.palette.text.main,
        backgroundColor: (theme) => theme.palette.background.main,
        display: { xs: "none", sm: "block" },
        zIndex: "10",
        width: "27%",
        height: { xs: "calc(100vh - 70px)", xl: "calc(100vh - 120px)" },
        borderRight: "1px solid",
        borderRightColor: (theme) => theme.palette.border.main,
        position: "fixed",
        top: { xs: "70px", xl: "120px" },
        left: "0px",
        paddingTop: "10px",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          marginLeft: { xs: "1rem", xl: "2rem" },
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
        variant="subtitle1"
      >
        <FilterListIcon
          sx={{ width: "auto", height: { xs: "24px", xl: "2.2rem" } }}
        />
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "1.2rem", xl: "1.5rem" } }}
        >
          Filters
        </Typography>
      </Box>
      <TextField
        value={queryObj.q ? queryObj.q : ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        size="small"
        label="Search"
        variant="outlined"
        inputProps={{ sx: { fontSize: { xl: "1.5rem" } } }}
        InputLabelProps={{
          sx: {
            fontSize: { xl: "1.5rem" },
            backgroundColor: (theme) => theme.palette.background.main,
            paddingX: "5px",
          },
        }}
        sx={{
          input: { color: (theme) => theme.palette.text.main },
          marginBottom: "1rem",
          marginTop: "8px",
          marginLeft: { xs: "1rem", xl: "2rem" },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: (theme) => theme.palette.text.main,
            },
          },
          "& .MuiInputBase-root-MuiOutlinedInput-root": {
            borderColor: (theme) => theme.palette.text.main,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: (theme) => theme.palette.orangeButtons.main,
            },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: (theme) => theme.palette.border.main,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: (theme) => theme.palette.text.main,
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: (theme) => theme.palette.orangeButtons.main,
          },
          "& .MuiInputLabel-outlined": {
            color: (theme) => theme.palette.text.main,
          },
        }}
        onChange={handleQueryInput}
      />

      {accordionArray.map(([key, value], index) => {
        const IconComponent = filterAccordionIcons[index];
        return (
          <Accordion
            elevation={0}
            sx={{
              "&:before": {
                display: "none",
              },
              backgroundColor: (theme) => theme.palette.background.main,
            }}
            disableGutters
            expanded={expanded === `panel${index + 1}`}
            onChange={(event, isExpanded) =>
              handlePanelExpand(isExpanded, `panel${index + 1}`)
            }
            key={index}
          >
            <AccordionSummary
              sx={{
                fontFamily: "DM Sans, sans-serif",
                "& .MuiAccordionSummary-content": {
                  marginY: { xs: "6px", xl: "10px" },
                  color: (theme) => theme.palette.text.main,
                },
                "&:hover": {
                  backgroundColor:
                    expanded === `panel${index + 1}`
                      ? (theme) => theme.palette.filterButtons.selectedHover
                      : (theme) => theme.palette.filterButtons.hover,
                },
                backgroundColor:
                  expanded === `panel${index + 1}`
                    ? (theme) => theme.palette.filterButtons.selected
                    : "transparent",
                fontSize: { xs: "0.9rem", xl: "1.5rem" },
                minHeight: "0px",
                margin: "0px",
                paddingLeft: { xl: "2rem" },
              }}
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: (theme) => theme.palette.text.main,
                    height: "auto",
                    width: { xs: "24px", xl: "2rem" },
                  }}
                />
              }
            >
              <IconComponent
                style={{ marginRight: "0.2rem" }}
                sx={{ height: { xl: "2rem", xs: "1.5rem" }, width: "auto" }}
              />
              {key}
              {queryObj[key] && queryObj[key].length > 0 ? (
                <Box
                  sx={{
                    marginLeft: "1.5rem",
                    marginY: "auto",
                    height: "8px",
                    width: "8px",
                    backgroundColor: (theme) =>
                      theme.palette.orangeButtons.main,
                    borderRadius: "50%",
                  }}
                />
              ) : null}
            </AccordionSummary>
            <AccordionActions
              disableSpacing
              sx={{
                backgroundColor: (theme) => theme.palette.background.main,
                paddingX: { xl: "2rem" },
                paddingY: { xl: "1rem" },
                justifyContent: "start",
              }}
            >
              <ToggleButtonGroup
                sx={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  "& .MuiToggleButtonGroup-grouped": {
                    border: "1px solid",
                    borderColor: (theme) => theme.palette.border.main,
                    borderRadius: "0px",
                  },
                  "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
                    borderLeft: "1px solid",
                    borderLeftColor: (theme) => theme.palette.border.main,
                    borderRadius: "5px",
                    marginLeft: "0px",
                  },
                  "& .MuiToggleButtonGroup-grouped:first-of-type": {
                    borderLeft: "1px solid",
                    borderLeftColor: (theme) => theme.palette.border.main,
                    borderRadius: "5px",
                  },
                  "& .MuiToggleButtonGroup-grouped.Mui-selected+.MuiToggleButtonGroup-grouped.Mui-selected":
                    {
                      border: "1px solid",
                      borderColor: (theme) => theme.palette.border.main,
                    },
                }}
                exclusive={value.exclusive}
                onChange={(event, newValue) =>
                  handleToggleChange(event, newValue, key)
                }
                spacing={2}
                variant="plain"
                value={queryObj[key]}
              >
                {value.values.map(([buttonText, buttonVal], index) => (
                  <ToggleButton
                    key={index}
                    value={buttonVal}
                    sx={{
                      color: (theme) => theme.palette.text.main,
                      px: "0.3rem",
                      py: "0.1rem",
                      textTransform: "none",
                      fontSize: { xs: "0.8rem", xl: "1.3rem" },
                      ":hover": {
                        backgroundColor: (theme) =>
                          theme.palette.filterButtons.hover,
                      },
                      "&.Mui-selected": {
                        color: (theme) => theme.palette.text.main,
                        backgroundColor: (theme) =>
                          theme.palette.filterButtons.selected,
                        ":hover": {
                          backgroundColor: (theme) =>
                            theme.palette.filterButtons.selectedHover,
                        },
                      },
                    }}
                  >
                    {buttonText}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </AccordionActions>
          </Accordion>
        );
      })}
      <Box sx={{ height: { xs: "110px", xl: "120px" } }}></Box>
      <Stack
        direction="row"
        width="27%"
        justifyContent="center"
        spacing={3}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          paddingY: "1.5rem",
          backgroundColor: (theme) => theme.palette.background.main,
          borderRight: "1px solid",
          borderRightColor: (theme) => theme.palette.border.main,
          borderTop: "1px solid",
          borderTopColor: (theme) => theme.palette.border.main,
        }}
      >
        <Button
          sx={{
            fontWeight: "500",
            fontSize: { xs: "0.9rem", xl: "1.8rem" },
            paddingX: "2.1rem",
            textTransform: "none",
            color: (theme) => theme.palette.text.main,
            backgroundColor: (theme) => theme.palette.buttons.main,
            ":hover": {
              backgroundColor: (theme) => theme.palette.buttons.hover,
            },
          }}
          variant="contained"
          onClick={handleClearFilters}
        >
          Clear
        </Button>
        <Button
          ref={applyRef}
          sx={{
            fontWeight: "500",
            fontSize: { xs: "0.9rem", xl: "1.8rem" },
            paddingX: "2.1rem",
            textTransform: "none",
            color: "white",
            backgroundColor: (theme) => theme.palette.orangeButtons.main,
            ":hover": {
              backgroundColor: (theme) => theme.palette.orangeButtons.hover,
            },
            "&.Mui-disabled": {
              backgroundColor: (theme) =>
                theme.palette.disabledButtons.background,
              color: (theme) => theme.palette.disabledButtons.text,
            },
          }}
          variant="contained"
          onClick={handleApplyFilters}
          disabled={
            !Object.keys(queryObj).some(
              (key) => queryObj[key] && queryObj[key].length > 0
            )
          }
        >
          Apply
        </Button>
      </Stack>
    </Box>
  );
};

export default RecipeFilter;
