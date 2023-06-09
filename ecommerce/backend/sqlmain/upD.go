package sqlmain

import (
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func UsRegis(info strs.UserInfo) bool {
	_, err := db.Query("INSERT INTO users values (?, ?, ?, ?, ?, false, 0, ?)", info.ID, info.Name, info.UserName, info.Email, info.Password, info.ProfilePic)
	if err != nil {
		return false
	}
	return true
}

func CartAdd(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL addcart(?, ?, ?)", uid, info.ID, info.Quantity)
	return err == nil
}

func CartOp1(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop1(?, ?)", uid, info.ID)
	return err == nil
}

func CartOp2(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop2(?, ?)", uid, info.ID)
	return err == nil
}

func CartOp3(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop3(?, ?)", uid, info.ID)
	return err == nil
}

func AddOrder(uid string, oid string, date string, paydetid string) bool {
	_, err := db.Query("INSERT INTO orders values (?, ?, ?, ?, 'pending')", oid, uid, paydetid, date)
	return err == nil
}

func AddPayDet(paydetid string) bool {
	_, err := db.Query("INSERT INTO paymentdetails values (?, 0, 'unpaid')", paydetid)
	return err == nil
}

func AddOrDet(oid string, pid string, quan int) bool {
	_, err := db.Query("INSERT INTO orderdetails values (?, ?, ?, 'test')", oid, pid, quan)
	return err == nil
}

func AddProd(uid string, prod strs.ProdAdd) bool {
	var res bool

	if CheckShopAuth(uid, prod.ShopID) {
		_, err := db.Query("INSERT INTO shop values (?, ?, ?, ?, ?, ?)", prod.ID, prod.ShopID, prod.Name, prod.Desc, prod.Price, prod.Stock)
		res = err == nil
		if res {
			_, err := db.Query("INSERT INTO categoryprod values (?, ?)", prod.Category, prod.ID)
			res = err == nil
			if res {
				for _, data := range prod.Imgpaths {
					_, err := db.Query("INSERT INTO productimg values (?, ?, 'link')", prod.ID, data)
					res = err == nil
					if !res {
						break
					}
				}
			}
		}
	} else {
		res = false
	}

	return res
}
