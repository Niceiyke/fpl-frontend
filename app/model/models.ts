type Player = {
    id: number;
    name: string;
    position: number;
    price: number;
    team: string;
    fdr: number[]; 
    expectedPoints: number; 
  };

  interface PlayerAPI {
    id: number;
    web_name: string;
    first_name: string;
    second_name: string;
    team: string;
    team_code: number;
    element_type: number;
    position: string;
    now_cost: number;
    cost_change_start: number;
    cost_change_event: number;
    transfer_out: number;
    transfer_in: number;
    chances_of_playing_next_round: number;
    chances_of_playing_this_round: number;
    form: string;
    is_homegrown: boolean;
    is_international: boolean;
    is_loaned_out: boolean;
    is_on_loan: boolean;
    is_player_deal: boolean;
    is_suspended: boolean;
    is_transfer_listed: boolean;
    is_youth: boolean;
    news: string;
    news_added: Date;
    photo: string;
    points_per_game: string;
    selected_by_percent: number;
    special: boolean;
    squad_number: number;
    status: string;
    transfers_in: number;
    transfers_in_event: number;
    transfers_out: number;
    transfers_out_event: number;
    value_form: string;
    value_season: string;
    minutes: number;
    goals_scored: number;
    assists: number;
    clean_sheets: number;
    goals_conceded: number;
    own_goals: number;
    penalties_saved: number;
    penalties_missed: number;
    yellow_cards: number;
    red_cards: number;
    saves: number;
    bonus: number;
    bps: number;
    influence: string;
    creativity: string;
    threat: string;
    ict_index: string;
    starts: number;
    expected_goals: string;
    expected_assists: string;
    expected_goal_involvements: string;
    expected_goals_conceded: string;
    influence_rank: number;
    influence_rank_type: number;
    creativity_rank: number;
    creativity_rank_type: number;
    threat_rank: number;
    threat_rank_type: number;
    ict_index_rank: number;
    ict_index_rank_type: number;
    corners_and_indirect_freekicks_order: number;
    corners_and_indirect_freekicks_text: string;
    direct_freekicks_order: number;
    direct_freekicks_text: string;
    penalties_order: number;
    penalties_text: string;
    expected_goals_per_90: string;
    saves_per_90: string;
    expected_assists_per_90: string;
    expected_goal_involvements_per_90: string;
    expected_goals_conceded_per_90: string;
    goals_conceded_per_90: string;
    now_cost_rank: number;
    now_cost_rank_type: number;
    form_rank: number;
    form_rank_type: number;
    points_per_game_rank: number;
    points_per_game_rank_type: number;
    selected_rank: number;
    selected_rank_type: number;
    starts_per_90: number;
    clean_sheets_per_90: number;
  }