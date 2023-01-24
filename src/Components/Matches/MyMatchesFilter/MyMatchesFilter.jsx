import React from 'react'
import "./MyMatchesFilter.css"
import {
    UncontrolledAccordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody
} from "reactstrap"

const MyMatchesFilter = () => {
    return (
        <div className="my_matches_filter_wrapper py-0 mx-1">
            <div className="my_matches_filter_box">
                <UncontrolledAccordion
                    defaultOpen={[
                        '1',
                        '2',
                        '3',
                        '4',
                        '5'
                    ]}
                    stayOpen
                >
                    <AccordionItem className='py-1 px-3' style={{ backgroundColor: 'var(--lighter-border)' }}>
                        <p className='mb-0' style={{ fontWeight: 700, lineHeight: "0.8rem" }}>Filter Matches</p>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="1">
                            Near Me
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                            <input type="radio" name="fav_language_1" value="HTML" />
                            <label for="html" className='ms-1'>Within 50 kms(5)</label><br />
                            <input type="radio" name="fav_language_1" value="CSS" />
                            <label for="css" className='ms-1'>Within 100 kms(55)</label><br />
                            <input type="radio" name="fav_language_1" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Within 250 kms(97)</label>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">
                            Photo Settings
                        </AccordionHeader>
                        <AccordionBody accordionId="2">
                            <input type="radio" name="fav_language_2" value="HTML" />
                            <label for="html" className='ms-1'>All</label><br />
                            <input type="radio" name="fav_language_2" value="CSS" />
                            <label for="css" className='ms-1'>Visible to all(3)</label><br />
                            <input type="radio" name="fav_language_2" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Protected Phot...(2)</label>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3">
                        Recently Joined
                        </AccordionHeader>
                        <AccordionBody accordionId="3">
                            <input type="radio" name="fav_language_3" value="HTML" />
                            <label for="html" className='ms-1'>All</label><br />
                            <input type="radio" name="fav_language_3" value="CSS" />
                            <label for="css" className='ms-1'>Within a week(3)</label><br />
                            <input type="radio" name="fav_language_3" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Within a month(11)</label>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="4">
                        Active Members
                        </AccordionHeader>
                        <AccordionBody accordionId="4">
                            <input type="radio" name="fav_language_4" value="HTML" />
                            <label for="html" className='ms-1'>All</label><br />
                            <input type="radio" name="fav_language_4" value="CSS" />
                            <label for="css" className='ms-1'>Within a week(6)</label><br />
                            <input type="radio" name="fav_language_4" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Within a month(17)</label>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="5">
                        Annual Income
                        </AccordionHeader>
                        <AccordionBody accordionId="5">
                            <input type="radio" name="fav_language_5" value="HTML" />
                            <label for="html" className='ms-1'>All</label><br />
                            <input type="radio" name="fav_language_5" value="CSS" />
                            <label for="css" className='ms-1'>Upto PKR 1 Lak...(54)</label><br />
                            <input type="radio" name="fav_language_5" value="JavaScript" />
                            <label for="javascript" className='ms-1'>PKR 1 Lakh to ...(16)</label>
                        </AccordionBody>
                    </AccordionItem>
                </UncontrolledAccordion>
            </div>
        </div>
    )
}

export default MyMatchesFilter