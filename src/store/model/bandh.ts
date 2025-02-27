import {Store} from './store';

export const BAndH: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: 'div[data-selenium="addToCartSection"]',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div[data-selenium="pricingPrice"]',
      euroFormat: false,
    },
    outOfStock: {
      container: 'button[data-selenium="notifyAvailabilityButton"]',
      text: ['notify when available'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.bhphotovideo.com/c/product/1452927-REG/evga_06g_p4_2063_kr_geforce_rtx_2060_xc.html',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3070',
      url:
        'https://www.bhphotovideo.com/c/product/1602755-REG/asus_dualrtx30708g_geforce_rtx_3070_8g.html',
    },
    {
      brand: 'pny',
      model: 'dual fan',
      series: '3070',
      url:
        'https://www.bhphotovideo.com/c/product/1595984-REG/pny_technologies_vcg30708tfxppb_geforce_rtx_3070_epic_x.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url:
        'https://www.bhphotovideo.com/c/product/1602756-REG/asus_strixrtx3070o8_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url:
        'https://www.bhphotovideo.com/c/product/1603974-REG/asus_dualrtx3070o8g_dual_geforce_rtx_3070.html',
    },
    {
      brand: 'asus',
      model: 'ko oc',
      series: '3070',
      url:
        'https://www.bhphotovideo.com/c/product/1606745-REG/asus_90yv0fq2_m0aa00_ko_nvidia_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url:
        'https://www.bhphotovideo.com/c/product/1606746-REG/asus_tuf_rtx3070_o8g_gaming_tuf_gaming_nvidia_geforce.html',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3070',
      url:
        'https://www.bhphotovideo.com/c/product/1614305-REG/asus_rtx3070_8g_ek_ekwb_geforce_rtx_3070.html',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3070',
      url:
        'https://www.bhphotovideo.com/c/product/1614300-REG/asus_rog_strix_rtx3070_o8g_white_rog_strix_geforce_rtx.html',
    },
    // TUF was removed from BH, not sure why so commenting out listing for now
    // {
    // 	brand: 'asus',
    // 	model: 'tuf',
    // 	series: '3080',
    // 	url: 'https://www.bhphotovideo.com/c/product/1593649-REG/asus_tuf_rtx3080_10g_gaming_tuf_gaming_geforce_rtx.html'
    // },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1593333-REG/gigabyte_gv_n3080gaming_oc_10gd_geforce_rtx_3080_gaming.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1592969-REG/zotac_zt_a30800d_10p_gaming_geforce_rtx_3080.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1593650-REG/asus_tuf_rtx3080_o10g_gaming_tuf_gaming_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1603617-REG/asus_rog_strix_rtx3080_o10g_gaming_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1614301-REG/asus_rog_strix_rtx3080_o10g_white_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1614303-REG/asus_rtx3080_10g_ek_ekwb_geforce_rtx_3080.html',
    },
    {
      brand: 'asus',
      model: 'ko oc',
      series: '3060ti',
      url:
        'https://www.bhphotovideo.com/c/product/1609756-REG/asus_ko_rtx3060ti_o8g_gaming_ko_geforce_rtx_3060.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url:
        'https://www.bhphotovideo.com/c/product/1607025-REG/asus_tuf_rtx3060ti_o8g_gaming_geforce_rtx_3060_ti.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url:
        'https://www.bhphotovideo.com/c/product/1606948-REG/gigabyte_gv_n306teagle_oc_8gd_rtx_3060_ti_eagle.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3060ti',
      url:
        'https://www.bhphotovideo.com/c/product/1606949-REG/gigabyte_gv_n306teagle_8gd_rtx_3060_ti_eagle.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3060ti',
      url:
        'https://www.bhphotovideo.com/c/product/1606945-REG/gigabyte_gv_n306taorus_m_8gd_aorus_rtx_3060_ti.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url:
        'https://www.bhphotovideo.com/c/product/1606947-REG/gigabyte_gv_n306tgaming_oc_8gd_rtx_3060_ti_gaming.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming pro',
      series: '3060ti',
      url:
        'https://www.bhphotovideo.com/c/product/1606946-REG/gigabyte_gv_n306tgamingoc_pro_8gd_rtx_3060_ti_gaming.html',
    },

    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1593996-REG/msi_g3080gxt10_geforce_rtx_3080_gaming.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1593997-REG/msi_g3080v3x10c_geforce_rtx_3080_ventus.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1593645-REG/msi_geforce_rtx_3080_gaming.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.bhphotovideo.com/c/product/1593646-REG/msi_geforce_rtx_3080_ventus.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1592970-REG/zotac_zt_a30900d_10p_gaming_geforce_rtx_3090.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1593647-REG/msi_geforce_rtx_3090_gaming.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1593994-REG/msi_g3090gxt24_geforce_rtx_3090_gaming.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1593648-REG/msi_geforce_rtx_3090_ventus.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1593995-REG/msi_g3090v3x24c_geforce_rtx_3090_ventus.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1593334-REG/gigabyte_gv_n3090eagle_oc_24gd_geforce_rtx_3090_eagle.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1593335-REG/gigabyte_gv_n3090gaming_oc_24gd_geforce_rtx3090_gaming_oc.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1594454-REG/asus_90yv0fd0_m0am00_tuf_gaming_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1594451-REG/asus_90yv0fd1_m0am00_tuf_gaming_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1607043-REG/asus_rtx3090_24g_ek_geforce_rtx_3090_24g.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1601764-REG/asus_rog_strix_rtx3090_o24g_gaming_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3090',
      url:
        'https://www.bhphotovideo.com/c/product/1614302-REG/asus_rog_strix_rtx3090_o24g_white_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url:
        'https://www.bhphotovideo.com/c/product/1598372-REG/amd_100_100000059wof_ryzen_9_5950x_3_4.html',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url:
        'https://www.bhphotovideo.com/c/product/1598373-REG/amd_100_100000061wof_ryzen_9_5900x_3_7.html',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url:
        'https://www.bhphotovideo.com/c/product/1598376-REG/amd_100_100000063wof_ryzen_7_5800x_3_8.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url:
        'https://www.bhphotovideo.com/c/product/1598377-REG/amd_100_100000065box_ryzen_5_5600x_3_7.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url:
        'https://www.bhphotovideo.com/c/product/1598377-REG/amd_100_100000065box_ryzen_5_5600x_3_7.html',
    },
    {
      brand: 'corsair',
      model: '750 platinum',
      series: 'sf',
      url:
        'https://www.bhphotovideo.com/c/product/1560680-REG/corsair_cp_9020186_na_corsair_sf750_power_supply.html',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: 'rx6700xt',
      url:
        'https://www.bhphotovideo.com/c/product/1629867-REG/asus_dual_rx6700xt_12g_dual_radeon_rx_6700.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: 'rx6700xt',
      url:
        'https://www.bhphotovideo.com/c/product/1629850-REG/asus_90yv0g81_m0aa00_republic_of_gamers_strix.html',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: 'rx6700xt',
      url:
        'https://www.bhphotovideo.com/c/product/1631271-REG/msi_r6700xtgx_radeon_rx_6700_xt.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: 'rx6700xt',
      url:
        'https://www.bhphotovideo.com/c/product/1629866-REG/asus_90yv0g80_m0aa00_tuf_gaming_radeon_rx.html',
    },
    {
      brand: 'xfx',
      model: 'amd reference',
      series: 'rx6700xt',
      url:
        'https://www.bhphotovideo.com/c/product/1630553-REG/xfx_force_rx_67xtyludp_amd_radeon_rx_6700.html',
    },
    {
      brand: 'xfx',
      model: 'amd reference',
      series: 'rx6700xt',
      url:
        'https://www.bhphotovideo.com/c/product/1630554-REG/xfx_force_rx_67xtytbdp_merc_319_amd_radeon.html',
    },
  ],
  name: 'bandh',
};
