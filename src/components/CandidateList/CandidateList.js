/* CandidateList.js */
import React from "react";
import { Card, CardText } from "styledComponents/Card";
import Button from "styledComponents/Button";

const CandidateList = ({ candidates }) => {
	return (
		<div>
			<ul>
				{candidates.map(c => {
					const skillList = c.skillList.replace(/,/gi, ", ");
					const headerRow = (
						<div
							className="clist-header1"
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%"
							}}
						>
							<div className="ccard-left">{c.personFormattedName}</div>
							<div className="ccard-right">Located In</div>
						</div>
					);

					const headerRow2 = (
						<div
							className="clist-header2"
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%"
							}}
						>
							<div className="ccard-left">{c.jobTitle ? c.jobTitle : ""}</div>
							<div className="ccard-right">
								{c.personMunicipality ? c.personMunicipality : "N / A"}
							</div>
						</div>
					);

					const btnRow1 = (
						<div
							className="clist-btns"
							style={{
								marginTop: "8px",
								display: "flex",
								justifyContent: "space-between",
								width: "100%"
							}}
						>
							<div className="ccard-left">
								<a href={`/profile?candid=${c.id}`}>
									<Button variant="flat">Edit Profile -></Button>
								</a>
							</div>
							<div className="ccard-right">
								<a href={`/bio?candid=${c.id}`}>
									<Button variant="flat">View Bio -></Button>
								</a>
							</div>
						</div>
					);

					const btnRow2 = (
						<div
							className="clist-btns"
							style={{
								marginTop: "8px",
								display: "flex",
								justifyContent: "space-between",
								width: "100%"
							}}
						>
							<div className="ccard-left">
								<a href={`/custom-resume?candid=${c.id}`}>
									<Button variant="flat">Resume -></Button>
								</a>
							</div>
							<div className="ccard-right">
								<a href={`/cand-skills?candid=${c.id}`}>
									<Button variant="flat">Skills -></Button>
								</a>
							</div>
						</div>
					);

					return (
						<li key={c.id}>
							<div>
								<Card>
									<CardText>
										{headerRow}
										{headerRow2}
										<div className="skill-list">
											<span style={{ fontWeight: "bold" }}>Skills - </span>
											{skillList}
										</div>
										{btnRow1}
										{btnRow2}
									</CardText>
								</Card>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CandidateList;
