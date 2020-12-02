const WORKS = [
    {
        name: 'portret',
        label: 'Portret',
        works: [
            {
                filename: 'new-generation-100x120cm.jpg',
                title: 'New Generation',
                size: { width: 120, height: 100 },
            },
            {
                filename: 'daan-en-jilles-80x80cm.jpg',
                title: 'Daan en Jilles',
                size: { width: 80, height: 80 },
            },
            {
                filename: 'sabine-en-emilie-60x80cm.jpg',
                title: 'Sabine en Emilie',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'pieter-en-renate.jpg',
                title: 'Pieter en Renate',
            },
            {
                filename: 'chris-en-mieke.jpg',
                title: 'Chris en Mieke',
            },
            {
                filename: 'hans-en-betty.jpg',
                title: 'Hans en Betty',
            },
            {
                filename: 'ruben-en-joram-70x70cm.jpg',
                title: 'Ruben en Joram',
                size: { width: 70, height: 70 },
            },
            {
                filename: 'katja-60x50cm.jpg',
                title: 'Katja',
                size: { width: 50, height: 60 },
            },
            {
                filename: 'chris.jpg',
                title: 'Chris',
            },
            {
                filename: 'midas-dekkers-150x85cm.jpg',
                title: 'Midas Dekkers',
                size: { width: 85, height: 150 },
            },
            {
                filename: 'gerard-van-amstel-75x90cm.jpg',
                title: 'Gerard van Amstel',
                size: { width: 90, height: 75 },
            },
            {
                filename: 'andre-verheul-90x60cm.jpg',
                title: 'André Verheul',
                size: { width: 60, height: 90 },
            },
            {
                filename: 'jan-van-lieshout.jpg',
                title: 'Jan van Lieshout',
            },
            {
                filename: 'henk-75x45cm.jpg',
                title: 'Henk',
                size: { width: 45, height: 75 },
            },
            {
                filename: 'midas-30x30cm.jpg',
                title: 'Midas',
                size: { width: 30, height: 30 },
            },
            {
                filename: 'hans-80x60cm.jpg',
                title: 'Hans',
                size: { width: 60, height: 80 },
            },
            {
                filename: 'anne-105x35cm.jpg',
                title: 'Anne',
                size: { width: 105, height: 35 },
            },
            {
                filename: 'chris-hofkamp-80x60cm.jpg',
                title: 'Chris Hofkamp',
                size: { width: 60, height: 80 },
            },
            {
                filename: 'h-lieverts-150x70cm.jpg',
                title: 'H. Lieverts',
                size: { width: 70, height: 150 },
            },
            {
                filename: 'harrie-60x60cm.jpg',
                title: 'Harrie',
                size: { width: 70, height: 150 },
            },
            {
                filename: 'alexander-bauwens-130x55cm.jpg',
                title: 'Alexander Bauwens',
                size: { width: 55, height: 130 },
            },
            {
                filename: 'marieke-105x45cm.jpg',
                title: 'Marieke',
                size: { width: 105, height: 45 },
            },
            {
                filename: 'robert-80x60cm.jpg',
                title: 'Robert',
                size: { width: 60, height: 80 },
            },
            {
                filename: 'mevrouw-strakkinga-70x50cm.jpg',
                title: 'Mevrouw Strakkinga',
                size: { width: 50, height: 70 },
            },
            {
                filename: 'kees-nelis-140x50cm.jpg',
                title: 'Kees Nelis',
                size: { width: 50, height: 140 },
            },
            {
                filename: 'victor-ferrero-120x60cm.jpg',
                title: 'Victor Ferrero',
                size: { width: 60, height: 120 },
            },
            {
                filename: 'dhr-pover-60x50cm.jpg',
                title: 'Dhr. Pover',
                size: { width: 50, height: 60 },
            },
            {
                filename: 'maria-en-willem-jan-80x100cm.jpg',
                title: 'Maria en Willem-Jan',
                size: { width: 100, height: 80 },
            },
            {
                filename: 'freddy-en-john-130x85cm.jpg',
                title: 'Freddy en John',
                size: { width: 85, height: 130 },
            },
            {
                filename: 'sander-en-ger-150x80cm.jpg',
                title: 'Sander en Ger',
                size: { width: 80, height: 150 },
            },
            {
                filename: 'debbie-en-rick-70x40cm.jpg',
                title: 'Debbie en Rick',
                size: { width: 40, height: 70 },
            },
            {
                filename: 'olivier-en-floris-60x50cm.jpg',
                title: 'Olivier en Floris',
                size: { width: 50, height: 60 },
            },
            {
                filename: 'gebroeders-pronk-150x55cm.jpg',
                title: 'Gebroeders Pronk',
                size: { width: 55, height: 150 },
            },
            {
                filename: 'karel-marleen-en-toon.jpg',
                title: 'Karel, Marleen en Toon',
            },
            {
                filename: 'stefanie-en-lisette-110x40cm.jpg',
                title: 'Stefanie en Lisette',
                size: { width: 40, height: 110 },
            },
            {
                filename: 'ijsjes-30x30cm.jpg',
                title: 'IJsjes',
                size: { width: 30, height: 30 },
            },
        ],
    },
    {
        name: 'landschap',
        label: 'Landschap',
        works: [
            {
                filename: 'langs-het-pieterpad--groningen-60x80cm.jpg',
                title: 'Langs het Pieterpad, Groningen',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'langs-het-pieterpad--drenthe-60x80cm.jpg',
                title: 'Langs het Pieterpad, Drenthe',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'langs-het-pieterpad--achterhoek-60x90cm.jpg',
                title: 'Langs het Pieterpad, Achterhoek',
                size: { width: 90, height: 60 },
            },
            {
                filename: 'langs-het-pieterpad--achterhoek-60x80cm.jpg',
                title: 'Langs het Pieterpad, Achterhoek',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'langs-het-pieterpad--groesbeek-60x80cm.jpg',
                title: 'Langs het Pieterpad, Groesbeek',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'langs-het-pieterpad--ponys-in-de-sneeuw-40x90cm.jpg',
                title: "Langs het Pieterpad, Pony's in de sneeuw",
                size: { width: 90, height: 40 },
            },
            {
                filename: 'camino-de-santiago--amandelbomen-bij-muruzabal-60x80cm.jpg',
                title: 'Camino de Santiago: Amandelbomen bij Muruzabel',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'camino-de-santiago--cirauqui-60x80cm.jpg',
                title: 'Camino de Santiago: Cirauqui',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'camino-de-santiago--hontanas-60x60cm.jpg',
                title: 'Camino de Santiago: Hontanas',
                size: { width: 60, height: 60 },
            },
            {
                filename: 'camino-de-santiago--monte-calderon-70x40cm.jpg',
                title: 'Camino de Santiago: Monte Calderon',
                size: { width: 40, height: 70 },
            },
            {
                filename: 'avree-50x60cm.jpg',
                title: 'Avrée',
                size: { width: 60, height: 50 },
            },
            {
                filename: 'champs-de-ble-50x70cm.jpg',
                title: 'Champs de Blé',
                size: { width: 70, height: 50 },
            },
            {
                filename: 'colza-50x70cm.jpg',
                title: 'Colza',
                size: { width: 70, height: 50 },
            },
            {
                filename: 'les-gris-hiver-50x60cm.jpg',
                title: 'Les Gris, Hiver',
                size: { width: 60, height: 50 },
            },
            {
                filename: 'lever-du-soleil-60x80cm.jpg',
                title: 'Lever du Soleil',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'mont-70x70cm.jpg',
                title: 'Mont',
                size: { width: 70, height: 70 },
            },
            {
                filename: 'morvan-50x80cm.jpg',
                title: 'Morvan',
                size: { width: 80, height: 50 },
            },
            {
                filename: 'les-charollais-45x145cm.jpg',
                title: 'Les Charollais',
                size: { width: 145, height: 45 },
            },
            {
                filename: 'alpes-de-haute-provence-80x100cm.jpg',
                title: 'Alpes de Haute Provence',
                size: { width: 100, height: 80 },
            },
            {
                filename: 'herfst-in-de-vogezen-30x30cm.jpg',
                title: 'Herfst in de Vogezen',
                size: { width: 30, height: 30 },
            },
            {
                filename: 'highlands-50x60cm.jpg',
                title: 'Highlands',
                size: { width: 60, height: 50 },
            },
            {
                filename: 'koolzaadveld-120x120cm.jpg',
                title: 'Koolzaadveld',
                size: { width: 120, height: 120 },
            },
            {
                filename: 'tierra-de-campos-80x80cm.jpg',
                title: 'Tierra de Campos',
                size: { width: 80, height: 80 },
            },
            {
                filename: 'bospad-50x40cm.jpg',
                title: 'Bospad',
                size: { width: 40, height: 50 },
            },
            {
                filename: 'het-gein-75x90cm.jpg',
                title: 'Het Gein',
                size: { width: 90, height: 75 },
            },
        ],
    },
    {
        name: 'stadsgezicht',
        label: 'Stadsgezicht',
        works: [
            {
                filename: 'arc-dijon-80x60cm.jpg',
                title: 'Arc, Dijon',
                size: { width: 60, height: 80 },
            },
            {
                filename: 'parasol-dijon-50x40cm.jpg',
                title: 'Parasol, Dijon',
                size: { width: 50, height: 40 },
            },
            {
                filename: 'arles-40x20cm.jpg',
                title: 'Arles',
                size: { width: 20, height: 40 },
            },
            {
                filename: 'avignon-30x40cm.jpg',
                title: 'Avignon',
                size: { width: 40, height: 30 },
            },
            {
                filename: 'jardin-du-luxembourg-parijs-120x120cm.jpg',
                title: 'Jardin du Luxembourg, Parijs',
                size: { width: 120, height: 120 },
            },
            {
                filename: 'place-des-vosges-parijs-25x60cm.jpg',
                title: 'Place des Vosges, Parijs',
                size: { width: 60, height: 25 },
            },
            {
                filename: 'kippenbrug-weesp-60x80cm.jpg',
                title: 'Kippenbrug, Weesp',
                size: { width: 80, height: 60 },
            },
            {
                filename: 'middenstraat-weesp-75x90cm.jpg',
                title: 'Middenstraat, Weesp',
                size: { width: 90, height: 75 },
            },
            {
                filename: 'nieuwstad-weesp-01-60x60cm.jpg',
                title: 'Nieuwstad, Weesp',
                size: { width: 60, height: 60 },
            },
            {
                filename: 'nieuwstad-weesp-02-50x80cm.jpg',
                title: 'Nieuwstad, Weesp',
                size: { width: 80, height: 50 },
            },
        ],
    },
    {
        name: 'project',
        label: 'Project',
        works: [
            {
                filename: 'kleuren-maken-de-wereld-mooier-300x110cm.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-links.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-rechts.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-01.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-02.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-03.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-04.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-05.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-06.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-07.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-08.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-09.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-10.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-11.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kleuren-maken-de-wereld-mooier-12.jpg',
                title: 'Kleuren maken de wereld mooier',
                size: { width: 300, height: 110 },
            },
            {
                filename: 'kamerscherm-240x160cm.jpg',
                title: 'Kamerscherm',
                size: { width: 240, height: 160 },
            },
        ],
    },
]

export default WORKS
