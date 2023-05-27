package strhand

type Profile struct {
}

type Home struct {
	Prof     UserTop   `json:"profile"`
	PopCat   []catLink `json:"popcats"`
	Popprod  []prodSim `json:"poprod"`
	Newprod  []prodSim `json:"newprod"`
	RandCat  []catLink `json:"rcats"`
	Cheaprod []prodSim `json:"chprod"`
}

type ProdP struct {
	Base  prodCom   `json:"pcom"`
	RelIt []prodSim `json:"rprod"`
	Rev   []reviews `json:"prev"`
}

type Shop struct {
	Prof  UserTop   `json:"profile"`
	Sh    shopCom   `json:"shopD"`
	SProd []prodSim `json:"sProd"`
}
