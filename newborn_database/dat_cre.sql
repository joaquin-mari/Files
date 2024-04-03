INSERT INTO Person(IDnumber   ,license  ,emailaddress  , firstname,  lastname   ,room ,address) 
     VALUES          (1111  ,'NURSE0'  ,'nurse0@gmail.com'     ,'pepa' ,'schneider', 0,   'Margaret str')                                   
          ,            (1112  ,'NURSE1'  ,'nurse1@gmail.com'     ,'ines' , 'mueller', 1,  'Haunstetter str' )                             
          ,          (1113  ,'NURSE2'  ,'nurse2@gmail.com'  ,'alissar' ,'schneider', 2, 'Oberhausen str')
          ,          (1114  ,'NURSE3'   ,'nurse3@gmail.com'  ,'anish' ,'mueller', 3, 'Lechhausen str')
          ,             (1115, NULL, 'carmen0@gmail.com', 'carmen', 'lopez', NULL, 'calle Americo Castro')
          ,              (1116, NULL, 'amelia0@gmail.com', 'amelia', 'holz', NULL, 'Pfersee str')
          ,              (1117, NULL, 'marco@gmail.com', 'marco', 'bauer', NULL, 'Goggingen str')
          ,              (1118, NULL, 'paula@gmail.com', 'paula', 'aldi', NULL, 'Max str')
          ,              (1119, NULL, 'tamara@gmail.com', 'tamara', 'schumacher', NULL, 'Hochzoll str')
          ,              (1120, NULL, 'nico@gmail.com', 'nicolas', 'schuster', NULL, 'Antons str')
          ,              (1121, NULL, 'jonas0@gmail.com', 'jonas', 'grogger', NULL, 'Friedberg str')
          ,              (1122, NULL, 'jens@gmail.com', 'jens', 'meier', NULL, 'Hochfeld str')
		  
          ;
		  
		  
		  
		  INSERT INTO  newborn( newbornIDnumber , firstname , lastname   ,height, weight, bloodtype,gender, timeofbirth, testdate) 
     VALUES          (0001  ,'pepa' ,'schneider', 20 , 2 , 'A+' , 'M' , '12:00' , '2001.12.04' )                                   
          ,            (0002 ,'ines' , 'mueller', 15 ,  3 , 'B-' , 'F'  , '14:00' ,'2001.05.09') 
          ,            (0003  ,'donghyun' ,'an', 12 , 3.2 , 'AB+' , 'M' , '12:22' , '2001.07.04' )
          ,              (0004  ,'javier' ,'fernandez', 22 , 2.1 , '0+' , 'M' , '10:20' , '2001.05.03' )
          ,               (0005  ,'javier' ,'dapena', 18, 2.3 , 'O-' , 'F' , '00:11' , '2001.10.27' )
          ,              (0006  ,'hana' ,'montana', 19 , 4.1 , 'AB-' , 'F' , '12:20' , '2001.11.13' ) 
          ,              (0007  ,'pepe' ,'pineda', 11 , 3.3 , 'O+' , 'M' , '23:40' , '2001.01.01' ) 
          ,              (0008  ,'maria' ,'jimenez', 22 , 1.1 , 'A+' , 'F' , '18:20' , '2001.05.03' ) 
          ,              (0009  ,'isaac' ,'neuwelt', 29 , 3 , 'B+' , 'M' , '17:50' , '2001.11.03' )
          ,              (0010  ,'lionel' ,'messi', 12 , 2 , 'A-' , 'M' , '02:20' , '2001.03.03' )
          ,              (0011  ,'doraemon' ,'cosmiccat', 12 , 1.8 , '0+' , 'M' , '05:20' , '2001.10.30' )     
          ,              (0012  ,'octavio' ,'okky', 20 , 2.4 , 'b+' , 'M' , '07:20' , '2001.09.03' )
		  
          ;
		  INSERT INTO result (newbornIDnumber,timestamp)
          VALUES (0001,'05.04.2023')
                 , (0003,'06.03.2025')
                 ,(0005,'06.03.2025')
                 ,(0008,'16.05.2025')
                 ,(00011, '20.09.2025')
                 , (0012,'09.12.2025')
;

INSERT INTO test (testID,newbornIDnumber,timestamp,heartpressure,bloodpressure,heartrate,breathingrate)
VALUES (11,0001,'05.04.2023',120.4,130.5,80,15)
,   (12,0003,'06.03.2025',150.6,160.4,90,16)
,    (13,0005,'06.03.2025',150.6,160.4,90,16)
,    (14,0008,'16.05.2025',140.6,180.4,80,14)
,    (15,0011,'20.09.2025',132.6,120.4,85,10)
,    (16,0012,'09.12.2025',100.6,170.4,60,14)
;
INSERT INTO storageunit(storagenumber,col,row)
VALUES	(1234, 1,2)
	,	(2345, 2,3)
     ,    (2341, 2,4)
     ,    (5435, 2,5)
     ,    (1932, 1,2)
;

            INSERT INTO  newborntest( newbornIDnumber , testtestID) 
     VALUES          (0001  ,11)                                   
          ,            (0003 , 12) 
          ,              (0005, 13) 
          ,            (0008, 14)   
          ,            (0011, 15)
          ,             (0012, 16)      
           ;


          INSERT INTO unitdoc (unitstoragenumber, doctorIDnumber )
		  VALUES    		 (1234, 1111)
		  ,                  (2345, 1114)
            ,                 (2341, 1117)
            ,                     (5435, 1119)
            ,                 (1932, 1120)
            
		  ;  

         INSERT INTO description(description,itemamount, date, name)
	VALUES	('bandages redcross', 3, '01.02.2022','bandages')
			,('pfizer syringes', 6, '04.04.2023','syringes')
               ,('covid vaccines', 8, '02.03.2023', 'vaccines')
               ,('diarrea pills', 5, '12.06.2023', 'pills')
               ,('sanitizing alcohol', 12, '15.09.2023', 'alcohol')
;
INSERT INTO item (item,description,bin)
VALUES ('bandages','bandages redcross',3)
       ,('syringes','pfizer syringes',4)
       ,('vaccines', 'covid vaccines', 5)
       ,('pills', 'diarrea pills', 6)
       ,('alcohol', 'sanitizing alcohol', 7)
;

            INSERT INTO storageunititem(storageunit, item)
		  VALUES			(1234, 'bandages')
		  ,					(2345, 'syringes')
		  ,                  (2341, 'vaccines')
            ,                   (5435, 'pills')  
            ,                   (1932, 'alcohol') 
            ;

              INSERT INTO newbornpathology(pathology, newbornIDnumber)
		  VALUES 			('allergy', 0003)
			,				('cold', 0004)
               ,              ('flu', 0007)
               ,              ('constipation', 0009)
		  ;

     INSERT INTO newbornparent ( newbornIDnumber, parentIDnumber)
		  VALUES 			(0001, 1115)
		  ,				(0002, 1116)
            ,                 (0003, 1117)
            ,                 (0004, 1118)
		  ;
                   
		