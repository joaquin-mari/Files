CREATE TABLE person
(IDnumber   INTEGER  NOT NULL
,license    VARCHAR NULL
,emailaddress VARCHAR NULL
,firstname VARCHAR NOT NULL
,lastname VARCHAR  NOT NULL
,room   INTEGER  NULL
,address VARCHAR    NULL
,CONSTRAINT person_pk   PRIMARY KEY (IDnumber)
,CONSTRAINT peron_u1    UNIQUE  (license)
,CONSTRAINT person_u2   UNIQUE (emailaddress)
); 

CREATE TABLE newborn
(newbornIDnumber   NUMERIC(8)   NOT NULL
,firstname  VARCHAR(20)         NOT NULL
,lastname   VARCHAR(20)         NOT NULL
,weight     DECIMAL        NOT NULL
,height     DECIMAL        NOT NULL
,bloodtype  VARCHAR(3)          NOT NULL
,gender     VARCHAR(8)          NOT NULL
,timeofbirth       VARCHAR  NOT NULL
,testdate   VARCHAR    NOT NULL
,CONSTRAINT newborn_pk  PRIMARY KEY (newbornIDnumber)
);


CREATE TABLE result
(newbornIDnumber  Integer NOT NULL
,timestamp         VARCHAR       NOT NULL
,CONSTRAINT        result_pk PRIMARY KEY (newbornIDnumber, timestamp)
,CONSTRAINT       result_fk FOREIGN KEY (newbornIDnumber)
                              REFERENCES newborn (newbornIDnumber) ON DELETE CASCADE
                               );
CREATE TABLE test
(testID         Integer    NOT NULL
,newbornIDnumber Integer     NULL
,timestamp       VARCHAR           NULL
,heartpressure  Float      NOT NULL
,bloodpressure  Float      NOT NULL 
,heartrate      Integer    NOT NULL 
,breathingrate  Integer    NOT NULL
,CONSTRAINT       test_pk PRIMARY KEY (testID)
,CONSTRAINT       test_fk FOREIGN KEY (newbornIDnumber, timestamp)
                              REFERENCES result (newbornIDnumber, timestamp) ON DELETE CASCADE
                               );


CREATE TABLE storageunit
(storagenumber  Integer     NOT NULL
,col              Integer     NOT NULL
,row              Integer     NOT NULL
,CONSTRAINT     storagenumber_pk PRIMARY KEY (storagenumber)
                               );

CREATE TABLE newborntest
(newbornIDnumber   NUMERIC(8)   NOT NULL
,testtestID        INTEGER   NOT NULL
,CONSTRAINT  newborntest_pk  PRIMARY KEY(newbornIDnumber, testtestID)
,CONSTRAINT  newborntest_f1  FOREIGN KEY(newbornIDnumber)
                            REFERENCES newborn(newbornIDnumber) ON DELETE CASCADE
,CONSTRAINT  newborntest_f2  FOREIGN KEY (testtestID)
                            REFERENCES test(testID) ON DELETE CASCADE
);
CREATE TABLE unitdoc
(unitstoragenumber  INTEGER NOT NULL
,doctorIDnumber     INTEGER  NOT NULL
,CONSTRAINT  unitdoc_pk      PRIMARY KEY(unitstoragenumber, doctorIDnumber)
,CONSTRAINT  unitdoc_f1      FOREIGN KEY(unitstoragenumber)
                            REFERENCES storageunit(storagenumber) ON DELETE CASCADE
,CONSTRAINT  unitdoc_f2      FOREIGN KEY(doctorIDnumber)
                            REFERENCES person(IDnumber) ON DELETE CASCADE
);


CREATE TABLE description
(description      VARCHAR  NOT NULL
,itemamount       Integer NOT NULL
,date              VARCHAR    NOT NULL
,name              VARCHAR    NOT NULL
,CONSTRAINT       description_pk PRIMARY KEY (description)
                               );




CREATE TABLE item
(item         VARCHAR   NOT NULL
,description   VARCHAR   NULL
,bin           Integer  NOT NULL
,CONSTRAINT        item_pk PRIMARY KEY (item)
,CONSTRAINT        item_fk FOREIGN KEY (description)
                              REFERENCES description (description) ON DELETE CASCADE
                               );


CREATE TABLE storageunititem
(storageunit        INTEGER  NOT  NULL
,item               VARCHAR NOT   NULL
,CONSTRAINT  storageunititem_pk  PRIMARY KEY(storageunit, item)
,CONSTRAINT storageunititem_f1   FOREIGN KEY(storageunit)
                                REFERENCES storageunit(storagenumber)  ON DELETE CASCADE
,CONSTRAINT  storageunititem_f2  FOREIGN KEY(item)
                                REFERENCES item(item)  ON DELETE CASCADE
);

CREATE TABLE newbornpathology
(pathology         VARCHAR NOT NULL
,newbornIDnumber   NUMERIC   NOT NULL
,CONSTRAINT  newbornpathology_pk PRIMARY KEY(pathology, newbornIDnumber)
,CONSTRAINT  newbornpathology_f1 FOREIGN KEY(newbornIDnumber)
                                REFERENCES newborn(newbornIDnumber)  ON DELETE CASCADE
);

CREATE TABLE newbornparent 
(newbornIDnumber Integer NOT NULL
,parentIDnumber   Integer NOT NULL
,CONSTRAINT      newbornparent_pk PRIMARY KEY (newbornIDnumber, parentIDnumber)
,CONSTRAINT       newbornparent_f1 FOREIGN KEY (newbornIDnumber)
                              REFERENCES newborn(newbornIDnumber) ON DELETE CASCADE
,CONSTRAINT       newbornparent_f2 FOREIGN KEY (parentIDnumber)
                              REFERENCES person(IDnumber) ON DELETE CASCADE
                               );





