package strhand

type Profile struct {
}

type Home struct {
	Prof     userTop   `json:"profile"`
	PopCat   []catLink `json:"popcats"`
	Popprod  []prodSim `json:"poprod"`
	Newprod  []prodSim `json:"newprod"`
	RandCat  []catLink `json:"rcats"`
	Cheaprod []prodSim `json:"chprod"`
}

type Shop struct {
	Prof  userTop   `json:"profile"`
	Sh    shopCom   `json:"shopD"`
	SProd []prodSim `json:"sProd"`
}
