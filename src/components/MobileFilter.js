import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleUrlString } from "../utils/urlString";
import {
  IconButton,
  Drawer,
  Typography,
  Button,
  Box,
  Stack,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionActions,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { accordionNames, filterAccordionIcons } from "../utils/constants";

const MobileFilter = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const mobileApplyRef = useRef(null);
  const [queryObj, setQueryObj] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  const accordionArray = Object.entries(accordionNames);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsFixed(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      if (isFocused && event.key === "Enter") {
        mobileApplyRef.current.click();
      }
    };

    if (isDrawerOpen) {
      window.addEventListener("keydown", handleEnterKeyPress);
    } else {
      window.removeEventListener("keydown", handleEnterKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [isFocused, isDrawerOpen]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePanelExpand = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleToggleChange = (event, newValue, key) => {
    setQueryObj({ ...queryObj, [key]: newValue });
  };

  const handleApplyFilters = () => {
    setIsDrawerOpen(false);
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
        display: { xs: "block", sm: "none" },
      }}
    >
      <Button
        disabled={isDrawerOpen ? true : false}
        onClick={() => setIsDrawerOpen(true)}
        sx={{
          zIndex: 20,
          position: isFixed ? "fixed" : "relative",
          bottom: isFixed ? "100px" : "auto",
          right: isFixed ? "1rem" : "auto",
          textTransform: "none",
          color: (theme) => theme.palette.text.main,
          backgroundColor: (theme) => theme.palette.buttons.main,
          ":hover": {
            backgroundColor: (theme) => theme.palette.buttons.hover,
          },
        }}
        endIcon={<FilterListIcon />}
      >
        <Typography>Filter</Typography>
      </Button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        PaperProps={{
          sx: {
            backgroundColor: (theme) => theme.palette.background.main,
          },
        }}
      >
        <Stack
          sx={{
            width: "100vw",
            paddingY: "1rem",
            color: (theme) => theme.palette.text.main,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingX: "1rem" }}
          >
            <Stack direction="row" alignItems="center" gap="3px">
              <FilterListIcon sx={{ height: "32px", width: "auto" }} />{" "}
              <Typography variant="subtitle1" sx={{ fontSize: "1.5rem" }}>
                Filters
              </Typography>
            </Stack>
            <IconButton
              sx={{
                padding: "4px",
                color: (theme) => theme.palette.text.main,
                backgroundColor: (theme) => theme.palette.buttons.main,
                ":hover": {
                  backgroundColor: (theme) => theme.palette.buttons.hover,
                },
              }}
              onClick={() => setIsDrawerOpen(false)}
            >
              <CloseIcon sx={{ width: "2rem", height: "auto" }} />
            </IconButton>
          </Stack>

          <TextField
            value={queryObj.q ? queryObj.q : ""}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
            size="medium"
            label="Search"
            variant="outlined"
            inputProps={{ sx: { fontSize: "1.4rem" } }}
            InputLabelProps={{
              sx: {
                fontSize: "1.4rem",
                backgroundColor: (theme) => theme.palette.background.main,
                paddingX: "5px",
              },
            }}
            sx={{
              width: "calc(100% - 2rem)",
              input: {
                color: (theme) => theme.palette.text.main,
              },
              marginBottom: "1rem",
              marginTop: "8px",
              marginX: "auto",
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
                    "& .MuiAccordionSummary-content": {
                      marginY: "6px",
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
                    fontSize: "1.3rem",
                    minHeight: "0px",
                    margin: "0px",
                  }}
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: (theme) => theme.palette.text.main,
                        width: "30px",
                        height: "auto",
                      }}
                    />
                  }
                >
                  <IconComponent
                    style={{
                      marginRight: "0.2rem",
                      transform: "translateY(3px)",
                    }}
                  />
                  <Typography variant="h6">{key}</Typography>
                  {queryObj[key] && queryObj[key].length > 0 ? (
                    <Box
                      sx={{
                        marginLeft: "1.5rem",
                        marginY: "auto",
                        height: "8px",
                        width: "8px",
                        backgroundColor: "hsl(11, 87%, 59%)",
                        borderRadius: "50%",
                      }}
                    />
                  ) : null}
                </AccordionSummary>
                <AccordionActions disableSpacing sx={{}}>
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
                          fontSize: "1.1rem",
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
          <Box sx={{ height: "87px" }}></Box>
          <Stack
            direction="row"
            width="100%"
            justifyContent="center"
            spacing={3}
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              paddingY: "1.5rem",
              backgroundColor: (theme) => theme.palette.background.main,
              borderTop: "1px solid",
              borderTopColor: (theme) => theme.palette.border.main,
            }}
          >
            <Button
              sx={{
                fontWeight: "500",
                fontSize: "1.4rem",
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
              ref={mobileApplyRef}
              sx={{
                fontWeight: "500",
                fontSize: "1.4rem",
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
        </Stack>
      </Drawer>
    </Box>
  );
};

export default MobileFilter;
