package sqlmain

import (
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func UsRegis(info strs.UserInfo) bool {
	_, err := db.Query("INSERT INTO users values (?, ?, ?, ?, ?, 'false', 0, ?)", info.ID, info.Name, info.UserName, info.Email, info.Password, info.ProfilePic)
	return err == nil
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
