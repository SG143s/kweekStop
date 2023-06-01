-- CreateTable
CREATE TABLE `cart` (
    `userid` VARCHAR(40) NOT NULL,
    `productid` VARCHAR(40) NOT NULL,
    `quantity` INTEGER NULL,

    INDEX `fk_cart_product1_idx`(`productid`),
    PRIMARY KEY (`userid`, `productid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(64) NULL,
    `imagepath` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoryprod` (
    `categoryid` INTEGER NOT NULL,
    `productid` VARCHAR(40) NOT NULL,

    INDEX `fk_table1_product1_idx`(`productid`),
    PRIMARY KEY (`categoryid`, `productid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deliveryservice` (
    `id` VARCHAR(40) NOT NULL,
    `name` VARCHAR(64) NULL,
    `fee` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `discount` (
    `id` VARCHAR(40) NOT NULL,
    `discname` VARCHAR(64) NULL,
    `type` TINYINT NULL,
    `discvalue` INTEGER NULL,
    `minpurchase` DECIMAL(10, 2) NULL,
    `maxdisc` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `discountitems` (
    `discid` VARCHAR(40) NOT NULL,
    `productid` VARCHAR(40) NOT NULL,

    INDEX `fk_discountitems_product1_idx`(`productid`),
    PRIMARY KEY (`discid`, `productid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderdetails` (
    `orderid` VARCHAR(40) NOT NULL,
    `productid` VARCHAR(40) NOT NULL,
    `quantity` INTEGER NULL,
    `deliveryid` VARCHAR(40) NOT NULL,

    INDEX `fk_orderdet_product1_idx`(`productid`),
    INDEX `fk_orderdetails_deliveryservice1_idx`(`deliveryid`),
    PRIMARY KEY (`orderid`, `productid`, `deliveryid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` VARCHAR(40) NOT NULL,
    `userid` VARCHAR(40) NOT NULL,
    `paydetid` VARCHAR(40) NOT NULL,
    `payserviceid` VARCHAR(40) NOT NULL,

    UNIQUE INDEX `orders_id_key`(`id`),
    INDEX `fk_orders_paymentdetails1_idx`(`paydetid`),
    INDEX `fk_orders_paymentservice1_idx`(`payserviceid`),
    INDEX `fk_orders_users1_idx`(`userid`),
    PRIMARY KEY (`id`, `userid`, `paydetid`, `payserviceid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paymentdetails` (
    `id` VARCHAR(40) NOT NULL,
    `total` DECIMAL(10, 2) NULL,
    `status` ENUM('paid', 'unpaid') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paymentservice` (
    `id` VARCHAR(40) NOT NULL,
    `name` VARCHAR(64) NULL,
    `fee` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` VARCHAR(40) NOT NULL,
    `shopid` VARCHAR(40) NOT NULL,
    `productname` VARCHAR(255) NULL,
    `description` MEDIUMTEXT NULL,
    `price` DECIMAL(10, 2) NULL,
    `stock` INTEGER NULL,

    UNIQUE INDEX `product_id_key`(`id`),
    INDEX `fk_product_shop1_idx`(`shopid`),
    PRIMARY KEY (`id`, `shopid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productimg` (
    `productid` VARCHAR(40) NOT NULL,
    `imagepath` VARCHAR(255) NOT NULL,
    `type` VARCHAR(16) NULL,

    PRIMARY KEY (`productid`, `imagepath`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shop` (
    `id` VARCHAR(40) NOT NULL,
    `ownerid` VARCHAR(40) NOT NULL,
    `shopname` VARCHAR(64) NULL,
    `shoptype` VARCHAR(64) NULL,
    `address` VARCHAR(128) NULL,
    `imagepath` VARCHAR(255) NULL,

    UNIQUE INDEX `shop_id_key`(`id`),
    INDEX `fk_shop_users_idx`(`ownerid`),
    PRIMARY KEY (`id`, `ownerid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategory` (
    `maincatid` INTEGER NOT NULL,
    `subcatid` INTEGER NOT NULL,

    INDEX `fk_subcategory_category2_idx`(`subcatid`),
    PRIMARY KEY (`maincatid`, `subcatid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userreview` (
    `userid` VARCHAR(40) NOT NULL,
    `productid` VARCHAR(40) NOT NULL,
    `rating` DECIMAL(4, 2) NULL,
    `review` MEDIUMTEXT NULL,

    INDEX `fk_userreview_product1_idx`(`productid`),
    PRIMARY KEY (`userid`, `productid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(40) NOT NULL,
    `name` VARCHAR(128) NULL,
    `username` VARCHAR(64) NULL,
    `email` VARCHAR(64) NULL,
    `password` VARCHAR(128) NULL,
    `shopowner` BOOLEAN NULL DEFAULT false,
    `saldo` DECIMAL(12, 2) NULL,
    `imagepath` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `fk_cart_product1` FOREIGN KEY (`productid`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `fk_cart_users1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `categoryprod` ADD CONSTRAINT `fk_table1_category1` FOREIGN KEY (`categoryid`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `categoryprod` ADD CONSTRAINT `fk_table1_product1` FOREIGN KEY (`productid`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `discountitems` ADD CONSTRAINT `fk_discountitems_discount1` FOREIGN KEY (`discid`) REFERENCES `discount`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `discountitems` ADD CONSTRAINT `fk_discountitems_product1` FOREIGN KEY (`productid`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orderdetails` ADD CONSTRAINT `fk_orderdet_orders1` FOREIGN KEY (`orderid`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orderdetails` ADD CONSTRAINT `fk_orderdet_product1` FOREIGN KEY (`productid`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orderdetails` ADD CONSTRAINT `fk_orderdetails_deliveryservice1` FOREIGN KEY (`deliveryid`) REFERENCES `deliveryservice`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_paymentdetails1` FOREIGN KEY (`paydetid`) REFERENCES `paymentdetails`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_paymentservice1` FOREIGN KEY (`payserviceid`) REFERENCES `paymentservice`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_users1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_product_shop1` FOREIGN KEY (`shopid`) REFERENCES `shop`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `productimg` ADD CONSTRAINT `fk_productimg_product1` FOREIGN KEY (`productid`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `shop` ADD CONSTRAINT `fk_shop_users` FOREIGN KEY (`ownerid`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `fk_subcategory_category1` FOREIGN KEY (`maincatid`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `fk_subcategory_category2` FOREIGN KEY (`subcatid`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `userreview` ADD CONSTRAINT `fk_userreview_product1` FOREIGN KEY (`productid`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `userreview` ADD CONSTRAINT `fk_userreview_users1` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
