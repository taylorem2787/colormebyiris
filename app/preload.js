$(document).ready(function(){
	function preload(arrayOfImages) {
  
        var nbLoaded = 0,
        nbTotal = arrayOfImages.length;
        $(arrayOfImages).each(function()
        {  
            var $img = $('<img/>');
            $img[0].src = this;
            $img.one('load', function()
            {
                nbLoaded ++;
                if($(window).width() >= 960) {
                	if (nbLoaded==37) { $("body").removeClass("loading") }
                } else {
                	if (nbLoaded==17) { $("body").removeClass("loading") }
                }
            });
        });
    }
	
	if($(window).width() >= 960) {
		preload([
			'http://www.paulineosmont.com/design/bg_intro.jpg',
			'http://www.paulineosmont.com/grid/antoinelestage.jpg',
			'http://www.paulineosmont.com/grid/antro.jpg',
			'http://www.paulineosmont.com/grid/artspire.jpg',
			'http://www.paulineosmont.com/grid/cgi.jpg',
			'http://www.paulineosmont.com/grid/depevt.jpg',
			'http://www.paulineosmont.com/grid/dixon.jpg',
			'http://www.paulineosmont.com/grid/inlogia.jpg',
			'http://www.paulineosmont.com/grid/legrandbal.jpg',
			'http://www.paulineosmont.com/grid/lerecyclagepasapas.jpg',
			'http://www.paulineosmont.com/grid/maram.jpg',
			'http://www.paulineosmont.com/grid/origami.jpg',
			'http://www.paulineosmont.com/grid/pmmt.jpg',
			'http://www.paulineosmont.com/grid/soulofthedeadtree.jpg',
			'http://www.paulineosmont.com/grid/tokkun.jpg',
			'http://www.paulineosmont.com/grid/witchatt.jpg',
			'http://www.paulineosmont.com/grid/zooecomuseum.jpg',
			'http://www.paulineosmont.com/background/Legrandbal/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Maram/bg_nb.jpg',
			'http://www.paulineosmont.com/background/zooecomuseum/bg_nb.jpg',
			'http://www.paulineosmont.com/background/CGI/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Antoinelestage/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Tokkun/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Soulofthedeadtree/bg_nb.jpg',
			'http://www.paulineosmont.com/background/PMMT/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Dixon/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Artspire/bg_nb.jpg',
			'http://www.paulineosmont.com/background/DptEvt/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Lerecyclagepasapas/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Inlogia/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Witchatt/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Antro/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Origami/bg_nb.jpg',
			'http://www.paulineosmont.com/background/Legrandbal/bg.jpg',
			'http://www.paulineosmont.com/background/Maram/bg.jpg',
			'http://www.paulineosmont.com/background/zooecomuseum/bg.jpg',
			'http://www.paulineosmont.com/background/CGI/bg.jpg',
			'http://www.paulineosmont.com/background/Antoinelestage/bg.jpg',
			'http://www.paulineosmont.com/background/Tokkun/bg.jpg',
			'http://www.paulineosmont.com/background/Soulofthedeadtree/bg.jpg',
			'http://www.paulineosmont.com/background/PMMT/bg.jpg',
			'http://www.paulineosmont.com/background/Dixon/bg.jpg',
			'http://www.paulineosmont.com/background/Artspire/bg.jpg',
			'http://www.paulineosmont.com/background/DptEvt/bg.jpg',
			'http://www.paulineosmont.com/background/Lerecyclagepasapas/bg.jpg',
			'http://www.paulineosmont.com/background/Inlogia/bg.jpg',
			'http://www.paulineosmont.com/background/Witchatt/bg.jpg',
			'http://www.paulineosmont.com/background/Antro/bg.jpg',
			'http://www.paulineosmont.com/background/Origami/bg.jpg',

			'http://www.paulineosmont.com/projets/Maram/Maram_01.jpg','http://www.paulineosmont.com/projets/Maram/Maram_02.jpg',
			'http://www.paulineosmont.com/projets/Zooecomuseum/zoo_01.jpg','http://www.paulineosmont.com/projets/Zooecomuseum/zoo_02.jpg',
			'http://www.paulineosmont.com/projets/CGI/cgi_01.jpg','http://www.paulineosmont.com/projets/CGI/cgi_02.jpg',
			'http://www.paulineosmont.com/projets/Antoinelestage/antoine_01.jpg','http://www.paulineosmont.com/projets/Antoinelestage/antoine_02.jpg',
			'http://www.paulineosmont.com/projets/Tokkun/tokkun_01.jpg','http://www.paulineosmont.com/projets/Tokkun/tokkun_02.jpg',
			'http://www.paulineosmont.com/projets/Soulofthedeadtree/skull_01.jpg','http://www.paulineosmont.com/projets/Soulofthedeadtree/skull_02.jpg',
			'http://www.paulineosmont.com/projets/PMMT/pmmt_01.jpg','http://www.paulineosmont.com/projets/PMMT/pmmt_02.jpg',
			'http://www.paulineosmont.com/projets/Dixon/dixon_01.jpg',
			'http://www.paulineosmont.com/projets/Artspire/artspire_01.jpg',
			'http://www.paulineosmont.com/projets/Lerecyclagepasapas/recyclage_01.jpg','http://www.paulineosmont.com/projets/Lerecyclagepasapas/recyclage_02.jpg',
			'http://www.paulineosmont.com/projets/Inlogia/inlogia_01.jpg',
			'http://www.paulineosmont.com/projets/Witchatt/witchatt_01.jpg',
			'http://www.paulineosmont.com/projets/Antro/antro_01.jpg',
			'http://www.paulineosmont.com/projets/Origami/origami_01.jpg','http://www.paulineosmont.com/projets/Origami/origami_02.jpg',
			'http://www.paulineosmont.com/projets/Legrandbal/legrandbal_01.jpg','http://www.paulineosmont.com/projets/Legrandbal/legrandbal_02.gif'
		]);
	}
	else {
		preload([
			'http://www.paulineosmont.com/design/bg_intro.jpg',
			'http://www.paulineosmont.com/grid/antoinelestage.jpg',
			'http://www.paulineosmont.com/grid/antro.jpg',
			'http://www.paulineosmont.com/grid/artspire.jpg',
			'http://www.paulineosmont.com/grid/cgi.jpg',
			'http://www.paulineosmont.com/grid/depevt.jpg',
			'http://www.paulineosmont.com/grid/dixon.jpg',
			'http://www.paulineosmont.com/grid/inlogia.jpg',
			'http://www.paulineosmont.com/grid/legrandbal.jpg',
			'http://www.paulineosmont.com/grid/lerecyclagepasapas.jpg',
			'http://www.paulineosmont.com/grid/maram.jpg',
			'http://www.paulineosmont.com/grid/origami.jpg',
			'http://www.paulineosmont.com/grid/pmmt.jpg',
			'http://www.paulineosmont.com/grid/soulofthedeadtree.jpg',
			'http://www.paulineosmont.com/grid/tokkun.jpg',
			'http://www.paulineosmont.com/grid/witchatt.jpg',
			'http://www.paulineosmont.com/grid/zooecomuseum.jpg',
			'http://www.paulineosmont.com/background/Legrandbal/bg.jpg',
			'http://www.paulineosmont.com/background/Maram/bg.jpg',
			'http://www.paulineosmont.com/background/zooecomuseum/bg.jpg',
			'http://www.paulineosmont.com/background/CGI/bg.jpg',
			'http://www.paulineosmont.com/background/Antoinelestage/bg.jpg',
			'http://www.paulineosmont.com/background/Tokkun/bg.jpg',
			'http://www.paulineosmont.com/background/Soulofthedeadtree/bg.jpg',
			'http://www.paulineosmont.com/background/PMMT/bg.jpg',
			'http://www.paulineosmont.com/background/Dixon/bg.jpg',
			'http://www.paulineosmont.com/background/Artspire/bg.jpg',
			'http://www.paulineosmont.com/background/DptEvt/bg.jpg',
			'http://www.paulineosmont.com/background/Lerecyclagepasapas/bg.jpg',
			'http://www.paulineosmont.com/background/Inlogia/bg.jpg',
			'http://www.paulineosmont.com/background/Witchatt/bg.jpg',
			'http://www.paulineosmont.com/background/Antro/bg.jpg',
			'http://www.paulineosmont.com/background/Origami/bg.jpg',

			'http://www.paulineosmont.com/projets/Maram/Maram_01.jpg','http://www.paulineosmont.com/projets/Maram/Maram_02.jpg',
			'http://www.paulineosmont.com/projets/Zooecomuseum/zoo_01.jpg','http://www.paulineosmont.com/projets/Zooecomuseum/zoo_02.jpg',
			'http://www.paulineosmont.com/projets/CGI/cgi_01.jpg','http://www.paulineosmont.com/projets/CGI/cgi_02.jpg',
			'http://www.paulineosmont.com/projets/Antoinelestage/antoine_01.jpg','http://www.paulineosmont.com/projets/Antoinelestage/antoine_02.jpg',
			'http://www.paulineosmont.com/projets/Tokkun/tokkun_01.jpg','http://www.paulineosmont.com/projets/Tokkun/tokkun_02.jpg',
			'http://www.paulineosmont.com/projets/Soulofthedeadtree/skull_01.jpg','http://www.paulineosmont.com/projets/Soulofthedeadtree/skull_02.jpg',
			'http://www.paulineosmont.com/projets/PMMT/pmmt_01.jpg','http://www.paulineosmont.com/projets/PMMT/pmmt_02.jpg',
			'http://www.paulineosmont.com/projets/Dixon/dixon_01.jpg',
			'http://www.paulineosmont.com/projets/Artspire/artspire_01.jpg',
			'http://www.paulineosmont.com/projets/Lerecyclagepasapas/recyclage_01.jpg','http://www.paulineosmont.com/projets/Lerecyclagepasapas/recyclage_02.jpg',
			'http://www.paulineosmont.com/projets/Inlogia/inlogia_01.jpg',
			'http://www.paulineosmont.com/projets/Witchatt/witchatt_01.jpg',
			'http://www.paulineosmont.com/projets/Antro/antro_01.jpg',
			'http://www.paulineosmont.com/projets/Origami/origami_01.jpg','http://www.paulineosmont.com/projets/Origami/origami_02.jpg',
			'http://www.paulineosmont.com/projets/Legrandbal/legrandbal_01.jpg','http://www.paulineosmont.com/projets/Legrandbal/legrandbal_02.gif'
		]);
	};
	
});