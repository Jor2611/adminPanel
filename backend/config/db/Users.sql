CREATE EXTENSION IF NOT EXISTS "pgcrypto";

create table Users (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	first_name VARCHAR(50) NOT NULL ,
	last_name VARCHAR(50) NOT NULL,
	username VARCHAR(50) NOT NULL UNIQUE,
	gender VARCHAR(7) NOT NULL,
	role VARCHAR(5) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	password TEXT NOT NULL
);
insert into Users (first_name, last_name, username, gender, role, password) values ('Theo', 'Tute', 'ttute0', 'Male', 'pm', crypt('210107',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Gertrude', 'Rochewell', 'grochewell1', 'Female', 'pm', crypt('412234',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Carin', 'Piatti', 'cpiatti2', 'Female', 'dev', crypt('148357',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Risa', 'Pallatina', 'rpallatina3', 'Female', 'pm', crypt('448877',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Andria', 'Gibberd', 'agibberd4', 'Female', 'dev', crypt('789190',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Agatha', 'Fettiplace', 'afettiplace5', 'Female', 'pm', crypt('843899',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Gideon', 'Fomichyov', 'gfomichyov6', 'Male', 'dev', crypt('870798',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Else', 'Heintsch', 'eheintsch7', 'Female', 'dev', crypt('684928',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Bendicty', 'Kitchen', 'bkitchen8', 'Male', 'dev', crypt('675338',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Royall', 'Stephens', 'rstephens9', 'Male', 'dev', crypt('263747',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Rita', 'Iacoviello', 'riacovielloa', 'Female', 'dev', crypt('821359',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Felicio', 'McGoldrick', 'fmcgoldrickb', 'Male', 'dev', crypt('383202',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Pooh', 'Bythell', 'pbythellc', 'Male', 'dev', crypt('389072',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Arnold', 'Dowles', 'adowlesd', 'Male', 'dev', crypt('191028',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Drusilla', 'O''Bradane', 'dobradanee', 'Female', 'dev', crypt('639181',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Clare', 'Skule', 'cskulef', 'Male', 'dev', crypt('857453',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Ingrim', 'Vergine', 'ivergineg', 'Male', 'dev', crypt('344261',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Ophelia', 'Bollon', 'obollonh', 'Female', 'dev', crypt('658298',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Drusi', 'McBeath', 'dmcbeathi', 'Female', 'pm', crypt('884965',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Sioux', 'Crichton', 'scrichtonj', 'Female', 'dev', crypt('996851',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Hyatt', 'Graeber', 'hgraeberk', 'Male', 'pm', crypt('243215',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Hersh', 'Casey', 'hcaseyl', 'Male', 'dev', crypt('512954',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Ty', 'Gilluley', 'tgilluleym', 'Male', 'dev', crypt('919603',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Laurena', 'Wikey', 'lwikeyn', 'Female', 'pm', crypt('524723',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Iorgos', 'Blaycock', 'iblaycocko', 'Male', 'dev', crypt('308937',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Jody', 'Wicklin', 'jwicklinp', 'Male', 'pm', crypt('926563',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Diahann', 'Lidgerton', 'dlidgertonq', 'Female', 'dev', crypt('469366',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Peyton', 'Scorthorne', 'pscorthorner', 'Male', 'dev', crypt('596792',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Madelle', 'Phillip', 'mphillips', 'Female', 'dev', crypt('132971',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Byrle', 'Robjant', 'brobjantt', 'Male', 'dev', crypt('347225',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Nannie', 'Freschi', 'nfreschiu', 'Female', 'dev', crypt('459135',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Elyse', 'Nani', 'enaniv', 'Female', 'dev', crypt('757439',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Lincoln', 'Brosetti', 'lbrosettiw', 'Male', 'pm', crypt('605827',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Danyelle', 'Worssam', 'dworssamx', 'Female', 'dev', crypt('478286',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Shea', 'Trinke', 'strinkey', 'Male', 'dev', crypt('828071',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Shay', 'Cud', 'scudz', 'Female', 'dev', crypt('327206',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Elmer', 'Ivashinnikov', 'eivashinnikov10', 'Male', 'dev', crypt('475702',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Dietrich', 'Emlyn', 'demlyn11', 'Male', 'dev', crypt('407127',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Branden', 'Gawkes', 'bgawkes12', 'Male', 'dev', crypt('354749',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Maximo', 'Ferreo', 'mferreo13', 'Male', 'pm', crypt('601658',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Bernard', 'Sambidge', 'bsambidge14', 'Male', 'dev', crypt('196280',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Laurette', 'Clemo', 'lclemo15', 'Female', 'pm', crypt('638219',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Holly-anne', 'Ambresin', 'hambresin16', 'Female', 'dev', crypt('495079',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Graham', 'Scandwright', 'gscandwright17', 'Male', 'dev', crypt('545117',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Wilhelmine', 'Whitcomb', 'wwhitcomb18', 'Female', 'dev', crypt('305720',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Aluin', 'Valentinuzzi', 'avalentinuzzi19', 'Male', 'dev', crypt('606747',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Joell', 'Letch', 'jletch1a', 'Female', 'dev', crypt('524749',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Abran', 'Alexander', 'aalexander1b', 'Male', 'pm', crypt('696770',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Court', 'Jacklings', 'cjacklings1c', 'Male', 'dev', crypt('345097',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Saxe', 'Harkness', 'sharkness1d', 'Male', 'dev', crypt('880921',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Edd', 'Craghead', 'ecraghead1e', 'Male', 'dev', crypt('488599',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Melany', 'Gerriet', 'mgerriet1f', 'Female', 'pm', crypt('296800',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Tildy', 'Ruckledge', 'truckledge1g', 'Female', 'dev', crypt('263480',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Livia', 'Asel', 'lasel1h', 'Female', 'dev', crypt('873673',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Nanette', 'Bossingham', 'nbossingham1i', 'Female', 'dev', crypt('996713',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Leonelle', 'Ogborn', 'logborn1j', 'Female', 'pm', crypt('808065',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Morry', 'Goudge', 'mgoudge1k', 'Male', 'pm', crypt('433246',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Mar', 'Izacenko', 'mizacenko1l', 'Male', 'dev', crypt('825417',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Kimball', 'Crafter', 'kcrafter1m', 'Male', 'dev', crypt('253638',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Jarret', 'Borlease', 'jborlease1n', 'Male', 'dev', crypt('338763',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Rosabella', 'Stourton', 'rstourton1o', 'Female', 'dev', crypt('310022',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Bartlett', 'Bugden', 'bbugden1p', 'Male', 'dev', crypt('397619',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Sharia', 'Rankine', 'srankine1q', 'Female', 'dev', crypt('354413',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Midge', 'Craufurd', 'mcraufurd1r', 'Female', 'dev', crypt('749662',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Brianne', 'McAvey', 'bmcavey1s', 'Female', 'dev', crypt('901684',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Saul', 'Faltskog', 'sfaltskog1t', 'Male', 'dev', crypt('501229',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Bobby', 'Tickel', 'btickel1u', 'Female', 'dev', crypt('839843',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Jamima', 'Lambrick', 'jlambrick1v', 'Female', 'pm', crypt('858001',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Manda', 'Boardman', 'mboardman1w', 'Female', 'dev', crypt('830834',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Tiffanie', 'Dyde', 'tdyde1x', 'Female', 'dev', crypt('965746',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Urson', 'Cawthorn', 'ucawthorn1y', 'Male', 'dev', crypt('877378',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Corissa', 'Iannitti', 'ciannitti1z', 'Female', 'dev', crypt('563637',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Aldin', 'Clyne', 'aclyne20', 'Male', 'pm', crypt('672747',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Arielle', 'Bleddon', 'ableddon21', 'Female', 'pm', crypt('489743',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Willie', 'O''Rourke', 'worourke22', 'Male', 'admin', crypt('766648',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Dominick', 'Astill', 'dastill23', 'Male', 'dev', crypt('481543',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Tasia', 'Ioselevich', 'tioselevich24', 'Female', 'pm', crypt('420462',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Fletcher', 'Philippsohn', 'fphilippsohn25', 'Male', 'dev', crypt('644065',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Kalvin', 'Filimore', 'kfilimore26', 'Male', 'dev', crypt('868818',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Stavros', 'Cappineer', 'scappineer27', 'Male', 'dev', crypt('123947',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Marve', 'Gemlett', 'mgemlett28', 'Male', 'dev', crypt('288187',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Kev', 'Korfmann', 'kkorfmann29', 'Male', 'dev', crypt('653904',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Artie', 'Caccavari', 'acaccavari2a', 'Male', 'dev', crypt('871918',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Shaine', 'Ricoald', 'sricoald2b', 'Male', 'dev', crypt('688187',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Ange', 'Menendez', 'amenendez2c', 'Female', 'pm', crypt('310263',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Lowrance', 'Pettis', 'lpettis2d', 'Male', 'pm', crypt('261422',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Hobie', 'Beaconsall', 'hbeaconsall2e', 'Male', 'pm', crypt('370330',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Veradis', 'Vasiliu', 'vvasiliu2f', 'Female', 'dev', crypt('450980',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Celene', 'Joist', 'cjoist2g', 'Female', 'pm', crypt('212277',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Bealle', 'Androlli', 'bandrolli2h', 'Male', 'dev', crypt('432544',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Justen', 'Dossett', 'jdossett2i', 'Male', 'pm', crypt('276289',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Cacilia', 'Rospars', 'crospars2j', 'Female', 'pm', crypt('397887',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Madelin', 'Callum', 'mcallum2k', 'Female', 'dev', crypt('457501',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Glenn', 'Zoren', 'gzoren2l', 'Female', 'dev', crypt('643021',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Franciska', 'Witherbed', 'fwitherbed2m', 'Female', 'pm', crypt('661274',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Grady', 'Cockshut', 'gcockshut2n', 'Male', 'dev', crypt('199889',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Serge', 'Lieber', 'slieber2o', 'Male', 'pm', crypt('396153',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Tan', 'Lowman', 'tlowman2p', 'Male', 'dev', crypt('235711',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Byrom', 'Hillam', 'bhillam2q', 'Male', 'dev', crypt('697907',gen_salt('bf')));
insert into Users (first_name, last_name, username, gender, role, password) values ('Jeanette', 'Weddup', 'jweddup2r', 'Female', 'dev', crypt('498528',gen_salt('bf')));
