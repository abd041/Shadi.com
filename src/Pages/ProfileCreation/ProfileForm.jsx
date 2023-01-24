/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./ProfileCreation.css"
import {
    Tabs,
    Tab,
    useFormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Box,
    TextField,
    Stack,
    Radio,
    RadioGroup,
    FormLabel,
    FormHelperText,
    Button,
    MenuItem
} from "@mui/material";
import { FormControl, Paper, Typography, Select } from "@material-ui/core";
import { Form, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';


const ProfileForm = (props) => {

    const profileInialization = {
        country: "",
        city: "",
        join_family: 1,
        family_city: "",
        martial_status: "",
        diet: 0,
        height: "",
        religion: "",
        sub_community: "",
        is_caste_matter: 0,
    }
    const [ProfileFormData, SetProfileFormData] = useState(profileInialization);
    const { country, city, join_family, family_city, martial_status, diet, height, religion, sub_community, is_caste_matter } = ProfileFormData;

    const martialStatusOpt = [
        { id: 0, value: "Never Married" },
        { id: 1, value: "Divorced" },
        { id: 2, value: "Widowed" },
        { id: 3, value: "Annulated" },
    ]

    const dietOpt = [
        { id: 0, value: "Veg" },
        { id: 1, value: "Non-Veg" },
        { id: 2, value: "Occasionally Non-Veg" },
        { id: 4, value: "Eggetarian" },
        { id: 5, value: "Jain" },
        { id: 6, value: "Vegan" },
    ]

    const heightOpt = [
        { id: 0, value: "4ft 5in - 134cm" },
        { id: 1, value: "4ft 6in - 137cm" },
        { id: 2, value: "4ft 7in - 139cm" },
        { id: 3, value: "4ft 8in - 142cm" },
        { id: 4, value: "4ft 9in - 144cm" },
        { id: 5, value: "4ft 10in - 147cm" },
        { id: 6, value: "4ft 11in - 149cm" },
        { id: 7, value: "5ft - 152cm" },
        { id: 8, value: "5ft 1in - 154cm" },
        { id: 9, value: "5ft 2in - 157cm" },
        { id: 10, value: "5ft 3in - 160cm" },
        { id: 11, value: "5ft 4in - 162cm" },
        { id: 12, value: "5ft 5in - 165cm" },
        { id: 13, value: "5ft 6in - 167cm" },
        { id: 14, value: "5ft 7in - 170cm" },
        { id: 15, value: "5ft 8in - 172cm" },
        { id: 16, value: "5ft 9in - 175cm" },
        { id: 17, value: "5ft 10in - 177cm" },
        { id: 18, value: "5ft 11in - 180cm" },
        { id: 19, value: "6ft - 182cm" },
        { id: 20, value: "6ft 1in - 185cm" },
        { id: 21, value: "6ft 2in - 187cm" },
        { id: 22, value: "6ft 3in - 190cm" },
        { id: 23, value: "6ft 4in - 193cm" },
        { id: 24, value: "6ft 5in - 195cm" },
        { id: 25, value: "6ft 6in - 198cm" },
        { id: 26, value: "6ft 7in - 200cm" },
        { id: 27, value: "6ft 8in - 203cm" },
        { id: 28, value: "6ft 9in - 205cm" },
        { id: 30, value: "6ft 10in - 208cm" },
        { id: 31, value: "6ft 11in - 210cm" },
        { id: 32, value: "7ft - 213cm" },
    ]

    const subCommunityOpt = [
        { id: 0, value: "Ansari" },
        { id: 1, value: "Arain" },
        { id: 2, value: "Awan" },
        { id: 3, value: "Dawoodi Bohra" },
        { id: 4, value: "Dekkani" },
        { id: 5, value: "Dudekula" },
        { id: 6, value: "Jat" },
        { id: 7, value: "Khoja" },
        { id: 8, value: "Lebbai" },
        { id: 9, value: "Mapila" },
        { id: 10, value: "Maraicar" },
        { id: 11, value: "Memon" },
        { id: 12, value: "Mughal" },
        { id: 13, value: "Pathan" },
        { id: 15, value: "Qureshi" },
        { id: 16, value: "Rajput" },
        { id: 17, value: "Rowther" },
        { id: 18, value: "Shafi" },
        { id: 19, value: "Sheikh" },
        { id: 20, value: "Shia" },
        { id: 21, value: "Shia Bohra" },
        { id: 22, value: "Shia Imami Ismaili" },
        { id: 23, value: "Shia Ithna Ashariyyah" },
        { id: 24, value: "Shia Zaidi" },
        { id: 25, value: "Siddiqui" },
        { id: 26, value: "Sunni" },
        { id: 27, value: "Sunni Ehle-Hadith" },
        { id: 28, value: "Sunni Hanafi" },
        { id: 29, value: "Sunni Hunbali" },
        { id: 30, value: "Sunni Maliki" },
        { id: 31, value: "Sunni Shafi" },
        { id: 32, value: "Syed" },
    ]

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target
        if (type == "checkbox") {
            SetProfileFormData({
                ...ProfileFormData,
                [name]: checked
            })
        } else {
            SetProfileFormData({
                ...ProfileFormData,
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
                <div className="row-form ">
                    <FormControl margin="normal" fullWidth>
                        <SelectValidator
                            fullWidth
                            label="Select Country"
                            name="country"
                            value={country}
                            onChange={handleChange}
                            // validators={['required']}
                            // errorMessages={['Country is Required.']}
                            // variant="standard"
                        >
                            <MenuItem value={1}>{"Pakistan"}</MenuItem>
                            <MenuItem value={2}>{"India"}</MenuItem>
                            <MenuItem value={3}>{"Iran"}</MenuItem>
                            <MenuItem value={4}>{"Turkey"}</MenuItem>

                        </SelectValidator>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <TextValidator
                            fullWidth
                            label="City you live in?"
                            name="city"
                            value={city}
                            onChange={handleChange}
                            // validators={['required']}
                            // errorMessages={['City is Required.']}
                            // variant="standard"
                        />
                    </FormControl>
                    <FormControl margin="normal" className='mb-0' fullWidth>
                        <FormLabel>You live with your family?</FormLabel>
                        <RadioGroup
                            name="join_family"
                            value={join_family}
                            onChange={handleChange}
                            className="radio_group_flex"
                        >
                            <FormControlLabel className='circular_radio_design' value={1} control={<Radio />} label="Yes" />
                            <FormControlLabel className='circular_radio_design' value={0} control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    {
                        join_family == 0 && <FormControl margin="normal" fullWidth>
                            <TextValidator
                                fullWidth
                                label="City your family lives in?"
                                name="family_city"
                                value={family_city}
                                onChange={handleChange}
                                // validators={['required']}
                                // errorMessages={['City is Required.']}
                                // variant="standard"
                            />
                        </FormControl>
                    }
                    <FormControl margin="normal" fullWidth>
                        <SelectValidator
                            fullWidth
                            label="Your Marital Status?"
                            name="martial_status"
                            value={martial_status}
                            onChange={handleChange}
                            // validators={['required']}
                            // errorMessages={['Marital Status is Required.']}
                            // variant="standard"
                        >
                            {
                                martialStatusOpt.map((option, i) => (
                                    <MenuItem key={i} value={option.id}>{option.value}</MenuItem>
                                ))
                            }
                        </SelectValidator>
                    </FormControl>
                    <FormControl margin="normal" className='mb-0' fullWidth>
                        <FormLabel>Your Diet</FormLabel>
                        <RadioGroup
                            name="diet"
                            value={diet}
                            onChange={handleChange}
                            className="radio_group_flex"
                        >
                            {
                                dietOpt.map((option, i) => (
                                    <FormControlLabel key={i} className='circular_radio_design' value={option.id} control={<Radio />} label={option.value} />
                                ))
                            }
                        </RadioGroup>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <SelectValidator
                            fullWidth
                            label="Your Height"
                            name="height"
                            value={height}
                            onChange={handleChange}
                            // validators={['required']}
                            // errorMessages={['Height is Required.']}
                            // variant="standard"
                        >
                            {
                                heightOpt.map((option, i) => (
                                    <MenuItem key={i} value={option.id}>{option.value}</MenuItem>
                                ))
                            }
                        </SelectValidator>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <SelectValidator
                            fullWidth
                            label="Select your Religion"
                            name="religion"
                            value={religion}
                            onChange={handleChange}
                            // validators={['required']}
                            // errorMessages={['Country is Required.']}
                            // variant="standard"
                        >
                            <MenuItem value={1}>{"Muslim"}</MenuItem>
                            <MenuItem value={2}>{"Christian"}</MenuItem>
                            <MenuItem value={3}>{"Hindu"}</MenuItem>
                            <MenuItem value={4}>{"Sikh"}</MenuItem>

                        </SelectValidator>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <SelectValidator
                            fullWidth
                            label="Your Sub-Community"
                            name="sub_community"
                            value={sub_community}
                            onChange={handleChange}
                            // validators={['required']}
                            // errorMessages={['Sub-Community is Required.']}
                            // variant="standard"
                        >
                            {
                                subCommunityOpt.map((option, i) => (
                                    <MenuItem key={i} value={option.id}>{option.value}</MenuItem>
                                ))
                            }
                        </SelectValidator>
                    </FormControl>
                    <FormControl margin="none" className='mb-0' fullWidth>
                        <FormControlLabel
                            className='profile_creation_form_check_label'
                            name='is_caste_matter'
                            defaultValue={is_caste_matter}
                            onChange={handleChange}
                            control={<Checkbox defaultChecked={false} />}
                            label="Not particular about my Partner's Community (Caste No Bar)" />
                    </FormControl>
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

export default ProfileForm