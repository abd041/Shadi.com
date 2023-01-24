/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./ProfileCreation.css"
import {
    FormGroup,
    FormControlLabel,
    InputLabel,
    Checkbox,
    TextField,
    Stack,
    Radio,
    RadioGroup,
    FormLabel,
    FormHelperText,
    Button,
    ListSubheader,
    MenuItem,
    styled,
    Typography,
    Switch,
} from "@mui/material";
import { FormControl, Paper, Select } from "@material-ui/core";
import { Form, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';

const EducationForm = (props) => {
    const educationInialization = {
        qualification: "",
        work_with: "",
        work_as: "",
        company_name: "",
        income_type: 0,
        income: "",
    }
    const [EducationFormData, SetEducationFormData] = useState(educationInialization);
    const { qualification, work_with, work_as, company_name, income_type, income } = EducationFormData;

    const qualificationOpt = {

    }

    const workWithOpt = [
        { id: 0, value: "Private Company" },
        { id: 1, value: "Government / Public Sector" },
        { id: 2, value: "Defense / Civil Services" },
        { id: 3, value: "Business / Self Employed" },
        { id: 4, value: "Not Working" },
    ]

    const incomeMonthlyOpt = [
        { id: 0, value: "Upto PKR 8K monthly" },
        { id: 1, value: "PKR 8 to 16K monthly" },
        { id: 2, value: "PKR 16 to 25K monthly" },
        { id: 3, value: "PKR 25 to 40K monthly" },
        { id: 4, value: "PKR 40 to 60K monthly" },
        { id: 5, value: "PKR 60 to 80K monthly" },
        { id: 6, value: "PKR 80K to 1.5 Lakh monthly" },
        { id: 7, value: "PKR 1.5 to 2.5 Lakh monthly" },
        { id: 8, value: "PKR 2.5 to 4 Lakh monthly" },
        { id: 9, value: "PKR 4 to 6.25 Lakh monthly" },
        { id: 10, value: "PKR 6.25 to 8 Lakh monthly" },
        { id: 11, value: "PKR 8 Lakh & above monthly" },
    ]

    const incomeYearlyOpt = [
        { id: 0, value: "Upto PKR 1 Lakh yearly" },
        { id: 1, value: "PKR 1 to 2 Lakh yearly" },
        { id: 2, value: "PKR 2 to 3 Lakh yearly" },
        { id: 3, value: "PKR 3 to 5 Lakh yearly" },
        { id: 4, value: "PKR 5 to 7 Lakh yearly" },
        { id: 5, value: "PKR 7 to 10 Lakh yearly" },
        { id: 6, value: "PKR 10 to 20 Lakh yearly" },
        { id: 7, value: "PKR 20 to 30 Lakh yearly" },
        { id: 8, value: "PKR 30 to 50 Lakh yearly" },
        { id: 9, value: "PKR 50 to 75 Lakh yearly" },
        { id: 10, value: "PKR 75 Lakh to 1 Crore yearly" },
        { id: 11, value: "PKR 1 Crore & above yearly" },
    ]


    const handleChange = (event) => {
        const { name, value, checked, type } = event.target
        if (type == "checkbox") {
            SetEducationFormData({
                ...EducationFormData,
                [name]: checked
            })
        } else {
            SetEducationFormData({
                ...EducationFormData,
                [name]: value
            })
        }
    };

    const onSubmit = (data) => {
        console.log(data)

        props.nextTab();
    };

    return (
        <>
            <ValidatorForm useRef="form" onSubmit={onSubmit} onError={errors => console.log(errors)}>
                <div className="row-form">
                    <FormControl margin="normal" fullWidth>
                        <SelectValidator
                            fullWidth
                            label="Your Highest Qualification"
                            name="qualification"
                            value={qualification}
                            onChange={handleChange}
                            // validators={['required']}
                            // errorMessages={['Qualification is Required.']}
                            // variant="standard"
                        >
                            <ListSubheader>Category 1</ListSubheader>
                            <MenuItem value={1}>Option 1</MenuItem>
                            <MenuItem value={2}>Option 2</MenuItem>
                            <ListSubheader>Category 2</ListSubheader>
                            <MenuItem value={3}>Option 3</MenuItem>
                            <MenuItem value={4}>Option 4</MenuItem>
                        </SelectValidator>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <SelectValidator
                            fullWidth
                            label="You work with"
                            name="work_with"
                            value={work_with}
                            onChange={handleChange}
                            // validators={['required']}
                            // errorMessages={['Work is Required.']}
                            // variant="standard"
                        >
                            {
                                workWithOpt.map((option) => (
                                    <MenuItem value={option.id}>{option.value}</MenuItem>
                                ))
                            }
                        </SelectValidator>
                    </FormControl>
                    {
                        work_with !== 4 && <>
                            <FormControl margin="normal" fullWidth>
                                <TextValidator
                                    fullWidth
                                    label="Work As"
                                    name="work_as"
                                    value={work_as}
                                    onChange={handleChange}
                                    // variant="standard"
                                />
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <TextValidator
                                    fullWidth
                                    label="Your company name (current)"
                                    name="company_name"
                                    value={company_name}
                                    onChange={handleChange}
                                    // variant="standard"
                                />
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <div className='d-flex align-items-center justify-content-between' style={{ flexWrap: 'wrap' }}>
                                    <FormLabel>Your Income</FormLabel>
                                    <RadioGroup
                                        name="income_type"
                                        value={income_type}
                                        onChange={handleChange}
                                        className="radio_group_flex"
                                    >
                                        <FormControlLabel className='circular_radio_design' value={0} control={<Radio />} label="Monthly" />
                                        <FormControlLabel className='circular_radio_design' value={1} control={<Radio />} label="Yearly" />
                                    </RadioGroup>
                                </div>
                            </FormControl>
                            <FormControl margin="none" fullWidth>
                                <SelectValidator
                                    fullWidth
                                    label={`Select ${income_type == 0 ? "Monthly" : "Yearly"} Income`}
                                    name="income"
                                    value={income}
                                    onChange={handleChange}
                                    // validators={['required']}
                                    // errorMessages={['Income is Required.']}
                                    // variant="standard"
                                >
                                    {
                                        income_type == 0 ? (
                                            incomeMonthlyOpt.map((option) => (
                                                <MenuItem value={option.id}>{option.value}</MenuItem>
                                            ))
                                        ) : (
                                            incomeYearlyOpt.map((option) => (
                                                <MenuItem value={option.id}>{option.value}</MenuItem>
                                            ))
                                        )
                                    }
                                </SelectValidator>
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <label style={{color: 'var(--text-color)', fontSize: '15px', lineHeight: 1.2, textAlign: 'justify'}}>
                                    {"Income details will help us find you relevant Matches. You may choose NOT to show this to others."}
                                </label>
                            </FormControl>
                        </>
                    }
                </div>
                <div className="next_button_panel mt-3">
                    <Button type='submit' className='btn_next'>
                        {"Continue"}
                    </Button>
                </div>
            </ValidatorForm>
        </>
    )
}

export default EducationForm