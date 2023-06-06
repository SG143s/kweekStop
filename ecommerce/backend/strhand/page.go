package strhand

type Profile struct {
	Base   UserInfo   `json:"prbase"`
	Shops  []ShopSim  `json:"owshop"`
	Orders []OrderSim `json:"usor"`
}

type Home struct {
	Prof     UserTop   `json:"profile"`
	PopCat   []CatLink `json:"popcats"`
	Popprod  []ProdSim `json:"poprod"`
	Newprod  []ProdSim `json:"newprod"`
	RandCat  []CatLink `json:"rcats"`
	Cheaprod []ProdSim `json:"chprod"`
}

type Prods struct {
	Prof UserTop   `json:"profile"`
	Prod []ProdSim `json:"prods"`
}

type ProdP struct {
	Prof  UserTop   `json:"profile"`
	Base  ProdCom   `json:"pcom"`
	RelIt []ProdSim `json:"rprod"`
	Rev   []reviews `json:"prev"`
}

type Shop struct {
	Prof  UserTop   `json:"profile"`
	Sh    shopCom   `json:"shopD"`
	SProd []ProdSim `json:"sProd"`
}

type Cart struct {
	Data []ShopCart `json:"data"`
}

type OrderCom struct {
}
